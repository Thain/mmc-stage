import React from "react"

export const Execution = ( info ) => {
  return (
    <div className="reg-w num-sect">
        <div>
            <svg width="14%" viewBox="0 0 217 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.501 33.63C166.801 33.63 164.401 32.985 162.301 31.695C160.201 30.405 158.551 28.53 157.351 26.07C156.181 23.58 155.596 20.64 155.596 17.25C155.596 13.86 156.181 10.935 157.351 8.475C158.551 5.985 160.201 4.095 162.301 2.805C164.401 1.515 166.801 0.869998 169.501 0.869998C172.171 0.869998 174.556 1.515 176.656 2.805C178.756 4.095 180.391 5.985 181.561 8.475C182.761 10.935 183.361 13.86 183.361 17.25C183.361 20.64 182.761 23.58 181.561 26.07C180.391 28.53 178.756 30.405 176.656 31.695C174.556 32.985 172.171 33.63 169.501 33.63ZM169.501 26.34C171.001 26.34 172.186 25.62 173.056 24.18C173.956 22.71 174.406 20.4 174.406 17.25C174.406 14.1 173.956 11.805 173.056 10.365C172.186 8.895 171.001 8.16 169.501 8.16C167.971 8.16 166.756 8.895 165.856 10.365C164.986 11.805 164.551 14.1 164.551 17.25C164.551 20.4 164.986 22.71 165.856 24.18C166.756 25.62 167.971 26.34 169.501 26.34ZM216.102 26.97H211.422V33H202.737V26.97H186.087V21.165L200.217 1.5H209.442L196.617 19.905H203.007V14.55H211.422V19.905H216.102V26.97Z" fill={info.color}/>
                <line x1="103.238" y1="18.75" x2="-0.00101471" y2="18.75" stroke={info.color} strokeWidth="7.5"/>
            </svg>
        </div>
        <h4 className="h4p">Execution</h4>
        <h6>{info.text}</h6>
    </div>
  )
}

