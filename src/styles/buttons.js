import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`
    button {
        padding: 0 20px;
        background-color: transparent;
        border-radius: var(--border-radius-1);
        border: none;
        font-weight: var(--font-weigth-2);
    }

    button:hover {
        cursor: pointer;
    }

    .btn-default {
        height: 60px;
        font-size: var(--font-size-4);
    }

    .btn-medium {
        height: 40px;
        font-size: var(--font-size-5);
        width: fit-content;
    }

    .btn-primary {
        color: var(--color-white);
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
    }

    .btn-primary:hover {
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }

    .btn-gray {
        color: var(--color-gray-50);
        background-color: var(--color-gray-20);
        border: 2px solid var(--color-gray-20);
    }

    .btn-gray:hover {
        color: var(--color-gray-20);
        background-color: var(--color-gray-50);
        border: 2px solid var(--color-gray-50);
    }

`;
