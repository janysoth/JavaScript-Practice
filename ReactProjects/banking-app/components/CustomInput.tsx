import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath, Form } from 'react-hook-form'
import { z } from 'zod'

interface CustomInput {
  form: typeof Form,
  name: string,
  label: string,
  placeholder: string
}

const CustomInput = ({ form, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>
            {label}
          </FormLabel>

          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput
