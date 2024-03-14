export function Footer() {
    return (
        <footer className="page-footer green darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © 2014 - {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="!#">More Links</a>
                </div>
            </div>
        </footer>
    )
}