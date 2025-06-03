


// export default interface UserInputProps {
//   onSendMessage: (message: string) => void;
//   onClearMessages: () => void;
//   onToggleTheme: () => void;
//   isDarkMode: boolean;
//   isLoading: boolean;
//   isDisabled: boolean;
//   placeholder?: string;
//   inputValue?: string;
//   onInputChange?: (value: string) => void;
//   onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
//   onFocus?: () => void;
//   onBlur?: () => void;
//   onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
//   onClear?: () => void;
//   onToggleSidebar?: () => void;
//   onToggleSettings?: () => void;
//   onToggleHelp?: () => void;
//   onToggleNotifications?: () => void;
//   onToggleProfile?: () => void;
//   onToggleSearch?: () => void;
//   onToggleChatHistory?: () => void;
//   onToggleFeedback?: () => void;
//   onToggleLanguage?: () => void;
//   onToggleAccessibility?: () => void;
//   onToggleShortcuts?: () => void;
//   onToggleAbout?: () => void;
//   onToggleLogout?: () => void;
//   onToggleLogin?: () => void;
//   onToggleRegister?: () => void;                    
//     onToggleResetPassword?: () => void;     
//     onToggleChangePassword?: () => void;    
//     onToggleDeleteAccount?: () => void; 
//     onTogglePrivacyPolicy?: () => void;

// }
// This interface defines the props for the UserInput component, which includes various event handlers and state management functions.
// It allows the parent component to control the behavior of the UserInput component, such as sending messages, clearing messages, toggling themes, and handling input changes.
// The component can also accept optional props like placeholder text, input value, and various event handlers for user interactions.
// The UserInput component is designed to be flexible and reusable, allowing for easy integration into different parts of the application.
// The interface also includes methods for handling user interactions such as focusing, blurring, and submitting the input.
// The component can be used in various contexts, such as chat applications, messaging platforms, or any other user input scenarios.
// It provides a structured way to manage user input and interactions, making it easier to maintain and extend the functionality of the application.
// The UserInputProps interface is a TypeScript interface that defines the properties and methods that can be passed to a UserInput component.
// It includes methods for sending messages, clearing messages, toggling themes, and handling various user interactions.

/*
You do need some props for your UserInput component, even for a simple chat bar. Here’s why:

Why Props Are Needed
Separation of concerns: The UserInput component should only handle the UI and user interactions (typing, submitting).
Communication: It needs a way to tell the parent component when the user sends a message (onSendMessage).
State control: The parent may want to control if the input is disabled or show a loading state (isLoading, isDisabled).
Flexibility: Optional props like placeholder make the component reusable.
*/