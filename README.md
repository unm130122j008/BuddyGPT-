# AI Chat Application

A modern, production-ready AI chat application built with React, TypeScript, and Tailwind CSS. Features a beautiful blue-themed UI with dark/light mode support, Google authentication, and multiple AI provider integrations.

## Features

- 🔐 **Google Authentication**: Secure login with Firebase Auth
- 🤖 **Multiple AI Providers**: OpenAI, Google Gemini, and Hugging Face support
- 🆓 **Free AI Options**: Google Gemini (1M tokens/month) and Hugging Face
- 🎨 **Modern UI**: Beautiful blue-themed interface with smooth animations
- 🌙 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 💬 **Chat Management**: Create, select, and delete chat conversations
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Real-time Typing**: Typing indicators and smooth message animations
- 🔒 **Environment Variables**: Secure API key management
- 🎯 **Production Ready**: Clean architecture with TypeScript and error handling
- 🌤️ **Weather Integration**: Real-time weather data with AccuWeather API
- 🧮 **Calculator**: Advanced mathematical calculations
- 🎨 **Image Generation**: AI-powered image creation with DALL-E

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase Authentication

#### Step 1: Firebase Project Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your existing project or create a new one
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Google** as a sign-in provider
5. Add your domain to the authorized domains list

#### Step 2: Get Firebase Configuration
1. Go to **Project Settings** → **General**
2. Scroll down to **Your apps** section
3. Click on the web app icon `</>` to create a web app (if not already created)
4. Copy the Firebase configuration object

#### Step 3: Configure Environment Variables
Create a `.env` file in the root directory and add your Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 3. Configure AI Provider (Choose One)

#### Option A: Google Gemini (Recommended - Best Free Option)
```env
VITE_GEMINI_API_KEY=your-gemini-api-key-here
VITE_GEMINI_MODEL=gemini-1.5-flash
```

#### Option B: OpenAI (Paid)
```env
VITE_OPENAI_API_KEY=your-openai-api-key-here
VITE_OPENAI_API_URL=https://api.openai.com/v1/chat/completions
VITE_OPENAI_MODEL=gpt-3.5-turbo
VITE_MAX_TOKENS=1000
VITE_TEMPERATURE=0.7
```

#### Option C: Hugging Face (Free Alternative)
```env
VITE_HUGGINGFACE_API_KEY=your-huggingface-api-key-here
VITE_HUGGINGFACE_MODEL=microsoft/DialoGPT-large
```

### 4. Optional Features Configuration

#### Weather Integration (Optional)
To enable real weather data, add your AccuWeather API key:
```env
VITE_WEATHER_API_KEY=your-accuweather-api-key-here
```

#### Image Generation (Optional)
To enable AI image generation, add your OpenAI API key:
```env
VITE_OPENAI_IMAGE_API_KEY=your-openai-api-key-here
```

### 5. Get Your API Keys

#### For Firebase (Required):
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings → General
4. Copy the configuration values to your `.env` file

#### For Google Gemini (Recommended):
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env` file

#### For AccuWeather (Optional):
1. Visit [AccuWeather Developer Portal](https://developer.accuweather.com/)
2. Sign up for a free account
3. Create a new app to get your API key
4. Copy the key and add it to your `.env` file

### 6. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Authentication Flow

1. **Login Screen**: Users are presented with a Google sign-in button
2. **Google OAuth**: Secure authentication through Firebase Auth
3. **User Session**: Persistent login state across browser sessions
4. **Profile Management**: Users can view their profile and sign out
5. **Secure Access**: All features require authentication

## Environment Variables

### Firebase Authentication (Required)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_FIREBASE_API_KEY` | Firebase API key |  |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | `your-project.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | `your-project-id` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | `your-project.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | `123456789` |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | `1:123:web:abc123` |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase measurement ID | `G-XXXXXXXXXX` |

### AI Providers (Choose One)

#### Google Gemini
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | Required |
| `VITE_GEMINI_MODEL` | Gemini model to use | `gemini-1.5-flash` |

#### OpenAI
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_OPENAI_API_KEY` | Your OpenAI API key | Required |
| `VITE_OPENAI_API_URL` | OpenAI API endpoint | `https://api.openai.com/v1/chat/completions` |
| `VITE_OPENAI_MODEL` | GPT model to use | `gpt-3.5-turbo` |
| `VITE_MAX_TOKENS` | Maximum tokens per response | `1000` |
| `VITE_TEMPERATURE` | Response creativity (0-1) | `0.7` |

### Optional Features

#### Weather Integration
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_WEATHER_API_KEY` | Your AccuWeather API key | `demo` (uses demo data) |

#### Image Generation
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_OPENAI_IMAGE_API_KEY` | Your OpenAI API key for image generation | Not configured |

## Security Features

- **Firebase Authentication**: Industry-standard OAuth 2.0 security
- **Secure Token Management**: Automatic token refresh and validation
- **Environment Variables**: All sensitive data stored securely
- **HTTPS Only**: Secure communication in production
- **Session Management**: Automatic logout on token expiration

## Architecture

### Authentication Flow
- **AuthContext**: Manages user authentication state
- **LoginScreen**: Google OAuth sign-in interface
- **Protected Routes**: Automatic redirection for unauthenticated users
- **User Profile**: Account management and settings

### Core Components
- **ChatInterface**: Main chat UI with message display and input
- **Sidebar**: Navigation with chat history and theme toggle
- **Message**: Individual message component with user/AI styling
- **MessageInput**: Text input with auto-resize and keyboard shortcuts
- **TypingIndicator**: Animated typing indicator for AI responses

### Services
- **Firebase**: Authentication and user management
- **AIService**: Smart provider selection and unified interface
- **PluginService**: Weather and calculator functionality

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Firebase** - Authentication and backend services
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server
- **Lucide React** - Icon library

## Production Deployment

1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure environment variables in your production environment
4. Update Firebase authorized domains for your production URL
5. Set up proper CORS and security headers

## Troubleshooting

### Firebase Authentication Issues
- Verify all Firebase environment variables are correctly set
- Check that Google sign-in is enabled in Firebase Console
- Ensure your domain is added to authorized domains
- Verify Firebase project configuration

### API Integration Issues
- Check console for specific error messages
- Verify API keys are correctly configured
- Ensure you haven't exceeded API limits
- Review the troubleshooting section for specific providers

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify your Firebase configuration
3. Ensure all required environment variables are set
4. Check Firebase Console for authentication logs
5. Review API provider documentation for specific issues
