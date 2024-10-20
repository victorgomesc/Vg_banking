import React from 'react'

const Dwolla = () => {
  return (
    <div>
      <>
          <div className="flex gap-4">
            <CustomInput control={form.control} name='firstName' label='First Name' placeholder='Enter your first name' />
            <CustomInput control={form.control} name='lastName' label='Last Name' placeholder='Enter your last name' />
          </div>
            <CustomInput control={form.control} name='address1' label='Address' placeholder='Address' />
            <CustomInput control={form.control} name='city' label='City' placeholder='Enter your city' />
          <div className="flex gap-4">
            <CustomInput control={form.control} name='state' label='State' placeholder='Example: NY' />
            <CustomInput control={form.control} name='postalCode' label='Postal Code' placeholder='Example: 11101' />
          </div>
          <div className="flex gap-4">
            <CustomInput control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='YYYY-MM-DD' />
            <CustomInput control={form.control} name='ssn' label='SSN' placeholder='Example: 1234' />
          </div>
          </>
    </div>
  )
}

export default Dwolla