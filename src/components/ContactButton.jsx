function ContactButton() {
    return (
        <button type="button" onClick={() => alert("Thanks for your interest! Contact details coming soon.")}
        className="bg-blue-600 hover:bg-blue-700 hover:shadow-md mt-7 w-full text-white font-semibold py-3 rounded-xl transition duration-300">
            Contact Tutor
        </button>
    );
}

export default ContactButton;