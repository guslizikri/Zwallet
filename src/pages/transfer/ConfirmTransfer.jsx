import { REGEXP_ONLY_DIGITS } from 'input-otp'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DescriptionLists from '../../component/elements/DescriptionList'
import UserLists from '../../component/elements/UserLists'
import { Button } from '../../component/parts/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../component/parts/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../component/parts/dialog'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../../component/parts/input-otp'
import Layout from '../../component/templates/layout'

const userDumy = {
  id: 1,
  frist_name: 'John',
  last_name: 'Doe',
  phone_number: '+62 813-8492-9994',
  picture_url:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

function ConfirmTransfer() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState('')

  const handleSubmitPin = (e) => {
    e.preventDefault()
    console.log(value)
    setValue('')

    navigate('/transfer/status')
  }
  return (
    <>
      <Layout>
        <Card className='bg-white border-none drop-shadow-md'>
          <CardHeader className='gap-6 p-[30px]'>
            <CardTitle className='text-lg font-bold'>Transfer To</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-5 px-[30px pb-5'>
            <UserLists data={userDumy} />
            <CardTitle className='text-lg font-bold'>Details</CardTitle>
            <DescriptionLists title='Amount' description='Rp100.000' />
            <DescriptionLists title='Balance Left' description='Rp20.000' />
            <DescriptionLists
              title='Date & Time'
              description='May 11, 2020 - 12.20'
            />
            <DescriptionLists
              title='Notes'
              description='For buying some socks'
            />
            <div className='w-full inline-flex justify-end '>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='rounded-xl' size='lg'>
                    Continue
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[503px] !rounded-2xl inline-flex flex-col gap-10'>
                  <DialogHeader>
                    <DialogTitle className='font-bold mb-3'>
                      Enter PIN to Transfer
                    </DialogTitle>
                    <DialogDescription className='mt-2 text-base text-[#3A3D42]/60 w-3/4'>
                      Enter your 6 digits PIN for confirmation to continue
                      transferring money.
                    </DialogDescription>
                  </DialogHeader>
                  <InputOTP
                    className='text-center text-[30px] font-bold'
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={value}
                    onChange={(value) => setValue(value)}>
                    <InputOTPGroup className='gap-6 justify-center w-full rounded-md'>
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={0}
                      />
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={1}
                      />
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={2}
                      />
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={3}
                      />
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={4}
                      />
                      <InputOTPSlot
                        className='!rounded-md w-14 h-16 text-center text-[30px] font-bold !border'
                        index={5}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                  <DialogFooter>
                    <Button
                      type='submit'
                      size='lg'
                      className='rounded-xl mt-12'
                      onClick={handleSubmitPin}>
                      Continue
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </Layout>
    </>
  )
}

export default ConfirmTransfer
