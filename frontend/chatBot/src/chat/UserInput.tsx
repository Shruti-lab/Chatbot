import React, { type FC, useState } from 'react';
// import type UserInputProps from '../__utils/UserInputProps';

interface UserInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  isDisabled: boolean;
  placeholder?: string;
}


const UserInput: React.FC<UserInputProps> = ({
    onSendMessage,
    isLoading,
    isDisabled,
    placeholder = "Type your message..."
}) => {

    const [input,setInput] = useState('');

    const messageSendHandler = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault(); // Prevent default form submission
        if (input.trim() !== '') {
            onSendMessage(input); // Call the function passed from parent
            setInput(''); // Clear input after sending
        }
    }


    return (
        <>
        <div className="border-b border-gray-900/10 pb-12">
            <form onSubmit={messageSendHandler}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                disabled={isLoading || isDisabled}
            />
            <button
                type="submit"

                disabled={isLoading || isDisabled}
                className={`px-4 py-2 rounded ${
                    isLoading || isDisabled 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
                {isLoading ? 'Sending...' : 'Send'}
            </button>
            </form>
            
        </div>
        </>
    );
};

export default UserInput;


/*
Using a form for submission is the better approach for several reasons:

Form Submission vs Direct onClick
Form submission is better because:

Accessibility: Forms allow submission with Enter key, which is expected behavior
HTML validation: You can use native form validation if needed
Semantics: It's semantically correct - an input with a submit button is a form

This approach:

Uses proper form submission
Disables the button when there's no input
Shows a loading state
Sticks to the bottom of the window
Has proper styling for disabled states
In the parent component, the onSendMessage function should handle showing the AI is typing and preventing new submissions until the AI response is complete.
*/

/*
You do need some props for your UserInput component, even for a simple chat bar. Here’s why:

Why Props Are Needed
Separation of concerns: The UserInput component should only handle the UI and user interactions (typing, submitting).
Communication: It needs a way to tell the parent component when the user sends a message (onSendMessage).
State control: The parent may want to control if the input is disabled or show a loading state (isLoading, isDisabled).
Flexibility: Optional props like placeholder make the component reusable.
Without Props?
If you put all logic (API calls, state, etc.) inside UserInput, it becomes tightly coupled and hard to reuse or test.
Props let you keep the component clean and focused on just the input UI.

Summary:
You don’t need all the props from your original interface, but you do need a few essential ones for a clean, maintainable design.
At minimum: onSendMessage, isLoading, isDisabled, and optionally placeholder.
*/