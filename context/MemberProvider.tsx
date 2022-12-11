import axios, { AxiosError } from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export interface Member {
  isLogined: boolean;
}

export interface MemberContext {
  member: Member | null;
  setMember: React.Dispatch<React.SetStateAction<Member | null>>;
}

const MemberContext = createContext<MemberContext>({
  member: null,
  setMember: () => {},
});
export default MemberContext;

export function MemberProvider({ children }: { children: React.ReactNode }) {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    const getMember = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('token not exist');
        setMember({ isLogined: false });
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/member`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        if (response.status === 200) {
          console.log('logined');
          setMember({ isLogined: true });
        }
      } catch (error) {
        // 로그인 되지 않거나, 토큰 만료됨
        if (error instanceof AxiosError && error.response?.status === 401) {
          console.log('token expired');
          setMember({ isLogined: false });
          return;
        } else {
          console.error(error);
        }
      }
    };

    getMember();
  }, []);

  const value = {
    member: member,
    setMember: setMember,
  };

  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
}
