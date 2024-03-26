import { Pen } from 'lucide-react'
import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import UserLists from '../../component/elements/UserLists'
import { Button } from '../../component/parts/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../component/parts/card'
import { Input } from '../../component/parts/input'
import Layout from '../../component/templates/layout'

const userDumy = {
  id: 1,
  frist_name: 'John',
  last_name: 'Doe',
  phone_number: '+62 813-8492-9994',
  picture_url:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

function SendMoney(props) {
  const [errorMessage, setErrorMessage] = useState('')
  const [className, setClassName] = useState('')
  const [rawValue, setRawValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)

  const validateValue = (value) => {
    const rawValue = value === undefined ? 'undefined' : value
    setRawValue(rawValue || ' ')

    if (!value) {
      setClassName('')
    } else if (Number.isNaN(Number(value))) {
      setErrorMessage('Please enter a valid number')
      setClassName('is-invalid')
    } else {
      setClassName('is-valid')
    }
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    setIsInputFocused(false)
  }
  return (
    <>
      <Layout>
        <Card className='bg-white border-none drop-shadow-md'>
          <CardHeader className='gap-6 p-[30px]'>
            <CardTitle className='text-lg font-bold'>Transfer Money</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-10 px-[30px pb-5'>
            <UserLists data={userDumy} />
            <div className='w-full h-max flex flex-col gap-11 justify-between'>
              <div className='w-full'>
                <p className='text-base text-listSecondary text-left w-1/2'>
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>
              </div>
              <div className='w-full '>
                <div className='inline-flex flex-col gap-3 items-center justify-center w-full'>
                  <CurrencyInput
                    id='validation-example-2-field'
                    placeholder='0.00'
                    allowDecimals={false}
                    className={`flex  mx-auto w-full text-center rounded-md border-none bg-transparent py-5 px-8 text-[42px] text-primary font-bold placeholder:text-secondary disabled:cursor-not-allowed focus:outline-none focus:ring-0 disabled:opacity-50 ${className}`}
                    onValueChange={validateValue}
                    prefix={'Rp'}
                    intlConfig={{
                      locale: 'id-ID',
                      currency: 'IDR',
                    }}
                    step={10}
                  />
                  <div className='invalid-feedback'>{errorMessage}</div>

                  <p className='text-base text-dark text-center font-bold'>
                    Rp120.000 Available
                  </p>

                  <div className='relative mt-8 mx-auto w-[40%] *:text-[#A9A9A9] focus:*:text-primary'>
                    <Pen
                      className={`absolute left-2.5 top-3 h-6 w-6 pencil-icon ${
                        isInputFocused ? '!text-primary' : ''
                      }`}
                    />
                    <Input
                      type='text'
                      name={props.name}
                      placeholder='Add some notes'
                      className='pl-10 pr-4 py-3 h-full w-full items-center rounded-none text-base !text-dark font-semibold placeholder:text-dark/40 placeholder:font-normal border-0 border-b-[1.5px] border-b-dark/25 bg-transparent focus:border-b-primary focus:outline-none focus:ring-0'
                      onChange={props.onInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  <div className='w-full inline-flex justify-end mt-12'>
                    <Button size='lg'>Continue</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Layout>
    </>
  )
}

export default SendMoney
