'use client'

// import { LogLine } from './LogLine'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface LogLineProps {
  time?: string
  text: React.ReactNode
}

export const LogLine = ({ time, text }: LogLineProps) => (
  <div className='flex gap-4 group'>
    <span className='text-slate-300 flex-shrink-0 w-20'>{time ? `[${time}]` : ''}</span>
    <div className='flex-1'>{text}</div>
  </div>
)

const ActivityLog = () => {
  return (
    <div className='flex-1 flex flex-col border-r border-gray-100 dark:border-gray-600'>
      <div className='flex border-b border-gray-100 dark:border-gray-600'>
        <Tabs defaultValue='activity' className='w-full'>
          <TabsList variant={'line'}>
            <TabsTrigger value='activity'>Activity Log</TabsTrigger>
            <TabsTrigger value='verification'>Verification Loops</TabsTrigger>
          </TabsList>

          <TabsContent value='activity'>
            <div className='flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed text-slate-700'>
              <div className='space-y-4'>
                <LogLine
                  time='09:00:00'
                  text={
                    <span>
                      I&apos;ll begin a systematic penetration test on{' '}
                      <span className='text-teal-500'>helpdesk.democorp.com</span>. Let me start with reconnaissance and
                      enumeration.
                    </span>
                  }
                />
                <LogLine
                  time='09:01:00'
                  text='Good! target is online. Now let me perform port scanning to identify running services.'
                />
                <div className='space-y-1'>
                  <LogLine time='09:02:00' text='Excellent reconnaissance results:' />
                  <div className='pl-24 flex items-start gap-4 text-slate-500'>
                    <div className='w-[2px] bg-slate-800 self-stretch mt-1' />
                    <div className='py-1 italic'>
                      - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
                    </div>
                  </div>
                  <LogLine text='Let me probe the web server on target first to understand its structure.' />
                </div>
                <LogLine
                  time='09:03:00'
                  text={
                    <span>
                      Great! I found a login page. I can see a useful comment:{' '}
                      <span className='text-teal-500'>&quot;TODO: Delete the testing account (test:test)&quot;</span>.
                      The login redirects to{' '}
                      <span className='bg-slate-800 text-white px-1.5 py-0.5 rounded'>/password/test</span>.
                    </span>
                  }
                />
                <LogLine
                  time='09:04:00'
                  text={
                    <span>
                      The POST method is not allowed on /password/test. It posts to{' '}
                      <span className='text-teal-500'>&apos;#&apos;</span> — the current page.
                    </span>
                  }
                />
                <LogLine
                  time='09:05:00'
                  text={
                    <span>
                      It redirects back to /password/test. Let me explore with{' '}
                      <span className='text-teal-500'>test:test</span> on other endpoints.
                    </span>
                  }
                />
                <LogLine
                  time='09:06:00'
                  text={
                    <span>
                      Great! I can access the dashboard using the{' '}
                      <span className='bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded'>
                        &apos;X-UserId: 10032&apos;
                      </span>{' '}
                      header. This suggests an <span className='text-rose-500 font-bold'>**IDOR vulnerability**</span>.
                    </span>
                  }
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value='verification'>
            <div className='p-3'>no data found</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ActivityLog
