import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPost from '../components/BlogPost'; // Assume this component exists

interface Post {
    title: string;
    content: string;
    author: string;
}

describe('BlogPost Component', () => {
    const post: Post = {
        title: 'Test Post',
        content: 'This is a test post.',
        author: 'John Doe',
    };

    test('renders the BlogPost component', () => {
        render(<BlogPost post={post} />);
        expect(screen.getByText('Test Post')).toBeInTheDocument();
        expect(screen.getByText('This is a test post.')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    test('calls the edit function when the Edit button is clicked', () => {
        const mockEdit = jest.fn();
        render(<BlogPost post={post} onEdit={mockEdit} />);

        const editButton = screen.getByText('Edit');
        fireEvent.click(editButton);

        expect(mockEdit).toHaveBeenCalled();
    });

    test('calls the delete function when the Delete button is clicked', () => {
        const mockDelete = jest.fn();
        render(<BlogPost post={post} onDelete={mockDelete} />);

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(mockDelete).toHaveBeenCalled();
    });
});
