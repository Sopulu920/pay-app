const CurrentYear = new Date().getFullYear();

function Footer() {
    return (
        <>
            <div className="position-relative">
                <footer className="position-fixed start-50 bottom-0 text-center py- my-5">Copyright &copy; {CurrentYear}</footer>
            </div>
        </>
    );
}

export default Footer;