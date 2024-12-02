interface Prop {
    page: number;
    setPage: (page: number) => void;
    lastPage: number;
}

export default function Pagination({ page, setPage, lastPage }: Prop) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        scrollToTop()
    };

    const handleNext = () => {
        if (page < lastPage) {
            setPage(page + 1);
        }
        scrollToTop()
    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handlePrev} disabled={page === 1}>
                Prev
            </button>
            <p style={styles.pageNumber}>{page} of {lastPage}</p>
            <button style={styles.button} onClick={handleNext} disabled={page === lastPage}>
                Next
            </button>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#222831",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    button: {
        padding: "10px 20px",
        margin: "0 15px",
        backgroundColor: "#ffc639",
        color: "#222831",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.2s",
    },
    pageNumber: {
        fontSize: "20px",
        color: "#fff",
        fontWeight: "bold",
        margin: "0 10px",
    },
};
