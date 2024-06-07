import { ID, Query } from "appwrite";
import { appwriteConfig, account, databases, storage, avatars } from "./config";
import { INewPost, INewUser } from "@/types";

// ============================================================
// AUTH
// ============================================================

// ============================== SIGN UP
export async function createUserAccount(user: INewUser): Promise<any> {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error("Failed to create new account");

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user account:", error);
    return error;
  }
}

// ============================== GET USER
export async function getCurrentUser(): Promise<any> {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw new Error("No current account found");

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw new Error("User not found in database");

    return currentUser.documents[0];
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// ============================== GET ACCOUNT
export async function getAccount(): Promise<any> {
  try {
    return await account.get();
  } catch (error) {
    console.error("Error getting account:", error);
    return null;
  }
}

// ============================== SAVE USER TO DB
export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}): Promise<any> {
  try {
    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
  } catch (error) {
    console.error("Error saving user to DB:", error);
    return null;
  }
}

// ============================== SIGN IN ACCOUNT
export async function signInAccount(user: { email: string; password: string }): Promise<any> {
  try {
    return await account.createEmailPasswordSession(user.email, user.password);
  } catch (error) {
    console.error("Error signing in account:", error);
    return null;
  }
}

// ============================== SIGN OUT ACCOUNT
export async function signOutAccount(): Promise<any> {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.error("Error signing out account:", error);
    return null;
  }
}

// ============================================================
// POSTS
// ============================================================

export async function createPost(post: INewPost) {
  try {
    // Upload image to storage
    const uploadedFile = await uploadFile(post.file[0]);
    if (!uploadedFile) throw new Error("Failed to upload file");

    // Get file URL
    const fileUrl = getFilePreview(uploadedFile.$id);
    if (!fileUrl) {
      await deleteFile(uploadedFile.$id);
      throw new Error("Failed to get file URL");
    }

    // Convert tags into an array
    const tags = post.tags?.replace(/ /g, '').split(",") || [];

    // Save post to DB
    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        location: post.location,
        tags: tags,
      }
    );

    if (!newPost) {
      await deleteFile(uploadedFile.$id);
      throw new Error("Failed to create new post");
    }

    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}

// ============================== UPLOAD FILE
export async function uploadFile(file: File): Promise<any> {
  try {
    return await storage.createFile(appwriteConfig.storageId, ID.unique(), file);
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
}

// ============================== GET FILE URL
export function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "top",
      100
    );

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

// ============================== DELETE FILE
export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);
    return { status: "ok" };
  } catch (error) {
    console.error("Error deleting file:", error);
    return null;
  }
}

// ============================== GET RECENT POSTS
export async function getRecentPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(20)]
    );

    if (!posts) throw new Error("Failed to fetch recent posts");

    return posts;
  } catch (error) {
    console.error("Error getting recent posts:", error);
    return null;
  }
}

// ============================== LIKE POSTS
export async function likePost(postId: string, likesArray: string[]) {
  try {
    const updatedPost = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      postId,
      {
        likes: likesArray
      }
    );

    if (!updatedPost) throw Error;

    return updatedPost;

  } catch (error) {
    console.error("Error liking post:", error);
  }
}

// ============================== SAVE POSTS
export async function savePost(postId: string, userId: string) {
  try {
    const updatedPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.savesCollectionId,
      ID.unique(),
      { user: userId, post: postId }
    );

    if (!updatedPost) throw new Error("Failed to save post");

    return updatedPost;
  } catch (error) {
    console.error("Error saving post:", error);
  }
}

// ============================== DELETE SAVE POSTS
export async function deleteSavedPost(savedRecordId: string) {
  try {
    const statusCode = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.savesCollectionId,
      savedRecordId
    );

    if (!statusCode) throw Error;

    return { status: 'ok' };
  } catch (error) {
    console.error("Error deleting saved post:", error);
  }
}
