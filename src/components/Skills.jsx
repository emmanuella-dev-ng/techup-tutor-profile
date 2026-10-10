function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
    ];
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
                    {skill}
                    </span>
            ))}
        </div>
    );
}

export default Skills;