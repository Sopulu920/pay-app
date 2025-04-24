const CurrentYear = new Date().getFullYear();

function Footer() {
    return (
        <>
            <div className="footer">
                <footer className="">Copyright &copy; {CurrentYear}</footer>
            </div>
        </>
    );
}

export default Footer;