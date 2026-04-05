import axios from 'axios';

const raw = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const API_BASE = raw.replace(/\/$/, '');

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000,
});
