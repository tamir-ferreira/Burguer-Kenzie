import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`
    button {
        padding: 0 1.25rem;
        background-color: transparent;
        border-radius: var(--border-radius-1);
        border: none;
        font-weight: var(--font-weigth-2);
    }

    button:hover {
        cursor: pointer;
    }

    .btn-default {
        height: 3.75rem;
        font-size: var(--font-size-4);
    }

    .btn-medium {
        height: 2.5rem;
        font-size: var(--font-size-5);
        width: fit-content;
    }

    .btn-primary {
        color: var(--color-white);
        background-color: var(--color-primary);
        border: .125rem solid var(--color-primary);
    }

    .btn-primary:hover {
        background-color: var(--color-primary-50);
        border: .125rem solid var(--color-primary-50);
    }

    .btn-gray {
        color: var(--color-gray-50);
        background-color: var(--color-gray-20);
        border: .125rem solid var(--color-gray-20);
    }

    .btn-gray:hover {
        color: var(--color-gray-20);
        background-color: var(--color-gray-50);
        border: .125rem solid var(--color-gray-50);
    }
`;
