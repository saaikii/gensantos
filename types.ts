import React from 'react';

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: string;
  rating: number;
  category: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}