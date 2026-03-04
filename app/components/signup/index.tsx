'use client'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Check, Eye, EyeOff, Star } from 'lucide-react'
import Image from 'next/image'
import { z } from 'zod/v3'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const signUpSchema = z.object({
  firstname: z.string().min(1, 'first name is required'),
  lastname: z.string().min(1, 'last name is required'),
  email: z.string().min(2, 'email is required').email('email is inValid format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Terms & Conditions',
  }),
})

type SignUpForm = z.infer<typeof signUpSchema>

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  // const { login, isAuthenticated, isLoading, error } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: SignUpForm) => {
    setIsLoading(true)
    try {
      const success = await signUp(data)
      if (success) {
        router.push('/dashboard')
      }
    } catch (err) {
      console.error('error:', err)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='relative h-screen md:py-10 py-40'>
      <div className='absolute inset-0 w-full h-full'>
        <Image src={'/img/background.jpeg'} alt='banner' priority fill className='object-cover' />
      </div>

      <div className='flex md:flex-row gap-8 md:gap-0 flex-col md:justify-between justify-center items-center  relative md:px-16 px-6 lg:py-20 py-6'>
        <div className=' hidden md:block'>
          <div className='text-white text-4xl font-semibold'>
            <h1>Expert level Cybersecurity</h1>
            <p className='mt-2'>
              in <span className='text-primary'>hours</span> not weeks.
            </p>
          </div>
          <div className='text-white mt-7 flex flex-col gap-2'>
            <p className='text-xl font-semibold'>{`What's included`}</p>
            <div className='text-sm flex gap-4'>
              <Check className='text-green-700 size-4 shrink-0' />
              <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
            </div>
            <div className='text-sm flex gap-4'>
              <Check className='text-green-700 size-4 shrink-0' />
              <p>Deliver high-quality, validated findings in hours, not weeks.</p>
            </div>
            <div className='text-sm flex gap-4'>
              <Check className='text-green-700 size-4 shrink-0' />
              <p>Generate professional, enterprise-grade security reports automatically.</p>
            </div>
          </div>

          <div className='text-white md:mt-40 mt-4'>
            <div className='flex items-center gap-4'>
              <Star className='text-green-700 size-4 ' />
              <p className='text-md'>Trustpilot</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
              <p className='text-xl'>Rated 4.5/5.0</p>
              <span className=' font-thin text-xs'>(100k+ reviews)</span>
            </div>
          </div>
        </div>
        <div className='bg-background p-8 rounded-md w-full max-w-md'>
          <div>
            <div className='mb-4 text-center'>
              <h1 className='text-2xl font-semibold'>Sign up</h1>
              <p className='text-sm mt-1'>
                Already have an account?&nbsp;
                <Link href='/' className='text-primary underline'>
                  Log in
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <div className='relative'>
                  <InputGroup>
                    <InputGroupInput
                      type='text'
                      placeholder='First Name*'
                      autoComplete='off'
                      register={register('firstname')}
                    />
                  </InputGroup>
                </div>

                <div className=' flex items-start'>
                  {errors?.firstname && <p className='text-red-500 text-xs mt-1'>{errors.firstname.message}</p>}
                </div>
              </div>

              <div>
                <div className='relative'>
                  <InputGroup>
                    <InputGroupInput
                      type='text'
                      placeholder='Last Name*'
                      autoComplete='off'
                      register={register('lastname')}
                    />
                  </InputGroup>
                </div>

                <div className=' flex items-start'>
                  {errors?.lastname && <p className='text-red-500 text-xs mt-1'>{errors.lastname.message}</p>}
                </div>
              </div>

              <div>
                <div className='relative'>
                  <InputGroup>
                    <InputGroupInput
                      type='email'
                      placeholder='Email Address*'
                      autoComplete='off'
                      register={register('email')}
                    />
                  </InputGroup>
                </div>
                <div className=' flex items-start'>
                  {errors?.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <div className='relative'>
                  <InputGroup>
                    <InputGroupInput
                      register={register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password (8+ characters)*'
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    />
                    <InputGroupAddon>
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                        aria-label={!showPassword ? 'Hide password' : 'Show password'}
                      >
                        {!showPassword ? (
                          <EyeOff className='w-4 h-4 text-gray-400' />
                        ) : (
                          <Eye className='w-4 h-4 text-gray-400' />
                        )}
                      </button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <div className='flex items-start mt-1'>
                  {errors?.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                </div>
                <div className='mt-2'>
                  <label className='flex items-start gap-2 cursor-pointer'>
                    <input
                      type='checkbox'
                      className='mt-1 h-4 w-4 rounded border-gray-300 accent-blue-500 cursor-pointer'
                      {...register('agreeToTerms')}
                    />
                    <span className='text-sm'>
                      I agree to Aps&nbsp;
                      <Link href='/terms' className='text-blue-500 underline'>
                        Terms & Conditions
                      </Link>
                      &nbsp;and acknowledge the
                      <Link href='/privacy' className='text-blue-500 underline'>
                        &nbsp;Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors?.agreeToTerms && <p className='text-red-500 text-xs mt-1'>{errors.agreeToTerms.message}</p>}
                </div>
              </div>

              <Button type='submit' className='w-full'>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className='flex justify-center gap-4'>
                <button
                  type='button'
                  aria-label='Continue with Apple'
                  className='flex items-center justify-center w-full h-10 rounded-full cursor-pointer dark:bg-zinc-500 bg-black hover:opacity-80 transition-opacity'
                >
                  <Image src={'/img/apple.png'} alt='Apple' width={24} height={24} className='invert' />
                </button>
                <button
                  type='button'
                  aria-label='Continue with Google'
                  className='flex items-center justify-center w-full h-10 rounded-full cursor-pointer border border-gray-200 bg-red-50 hover:opacity-80 transition-opacity'
                >
                  <Image src={'/img/google.png'} alt='Google' width={24} height={24} />
                </button>
                <button
                  type='button'
                  aria-label='Continue with Meta'
                  className='flex items-center justify-center w-full h-10 rounded-full cursor-pointer bg-blue-500 hover:opacity-80 transition-opacity'
                >
                  <Image src={'/img/meta.png'} alt='Meta' width={24} height={24} className='invert' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
