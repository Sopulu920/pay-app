const CurrentYear = new Date().getFullYear();

function Footer() {
    return (
        <>
            <footer className="text-center my-5">Copyright &copy; {CurrentYear}</footer>
        </>
    );
}

export default Footer;