import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
    it('should render the App', () => {
        const { container } = render(<App />)

        expect(
            screen.getByRole('heading', {
                name: /Bem Vindo!/i,
                level: 1
            })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('link', {
                name: /Comece por aqu/i
            })
        ).toBeInTheDocument()

        expect(screen.getByRole('img')).toBeInTheDocument()

        expect(container.firstChild).toBeInTheDocument()
    })
})
