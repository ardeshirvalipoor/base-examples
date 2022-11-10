export default {
    GOOGLE_CLIENT_ID: process.env.TODO_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.TODO_GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL: '/auth/google/redirect',
    GOOGLE_SCOPE: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
}