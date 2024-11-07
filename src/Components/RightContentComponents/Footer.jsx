
const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="contact-section">
                <h2>Have an idea for a website?</h2>
                <p>Contact me and let's make it happen!</p>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" aria-label="Your Name" />
                    <input type="email" placeholder="Your Email" aria-label="Your Email" />
                    <textarea placeholder="Your Message" aria-label="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer