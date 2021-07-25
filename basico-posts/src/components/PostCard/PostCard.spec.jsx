import { PostCard } from '.';
import { render, screen} from '@testing-library/react';
import { postCardPropsMock } from './mock'
import React from 'react'

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
      render(<PostCard {...props} />);

      expect(screen.getByAltText(/title 1/i)) //checa se a imagem tem alt title 1.
        .toHaveAttribute('src', 'img/img.png');
      expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument(); //checa se o h1 tem o role: title + id.
      expect(screen.getByText('body 1')).toBeInTheDocument(); // chega se o texto do body está no documento.
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot();
      });
})
