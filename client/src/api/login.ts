import { User } from '../types/user';
import { BASE_URL } from './const';

type LoginResult = 'success' | 'fail';

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  // TODO 3-1: POST, '/auth/login' 호출
  // body에는 { username, password }가 들어가야 함
  // 사용하는 기술에 맞추어 적절히 withCredential 설정하기
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include', // <- 중요! 세션 방식 로그인을 위해 꼭 설정해 주세요.
    },
    body: JSON.stringify(args),
  });

  return loginRes.ok ? 'success' : 'fail';
};

export const getCurrentUserInfo = async (): Promise<User | null> => {
  // TODO 3-2: GET, '/profile' 호출
  // 호출 성공시 유저 정보 반환
  // 마찬가지로 사용하는 기술에 맞추어 적절히 withCredential 설정하기
  const getUserRes = await fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include', // <- 중요! 세션 방식 로그인을 위해 꼭 설정해 주세요.
    },
  });

  if (getUserRes.ok) {
    getUserRes.json();
  }

  return null;
};
