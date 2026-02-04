
const PageHeader = ({children}) => {
    return (
        <header className="page-header">
            <h2>Header incromposable</h2>
            {children}
            <h2>Footer incromposable</h2>
        </header>
    );
}

export default PageHeader;