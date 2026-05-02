import BookDetails from './BookDetails';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://moon-lit-library.vercel.app/data.json");
    const data = await res.json();
    const selectedBook = data.find(d => d.id == id);

    return <BookDetails book={selectedBook} />;
};

export default BookDetailsPage;