"use client";

import { useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        area: "",
        structuralChanges: "",
        plumbingChanges: "",
        fixturesAndFittings: "",
        mirrorOrCabinet: "",
        tiling: "",
        smallStepUp: "",
    });
    const [result, setResult] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formData.area) errors["area"] = "Please select an area.";
        if (!formData.structuralChanges) errors["structuralChanges"] = "Please select structural changes.";
        if (!formData.plumbingChanges) errors["plumbingChanges"] = "Please select plumbing changes.";
        if (!formData.fixturesAndFittings) errors["fixturesAndFittings"] = "Please select fixtures and fittings.";
        if (!formData.mirrorOrCabinet) errors["mirrorOrCabinet"] = "Please select mirror or cabinet.";
        if (!formData.tiling) errors["tiling"] = "Please select tiling.";
        if (!formData.smallStepUp) errors["smallStepUp"] = "Please select small step-up.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const response = await fetch("/backend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setResult(data.tier);
    };

    return (
        <div className="facebook-form-container">
            <div className="facebook-card">
                <h2 className="facebook-title">Bathroom Renovation Estimate Calculation</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        { label: "Area", name: "area", options: ["5 square meters and above", "3-5 square meters", "0-3 square meters"] },
                        { label: "Structural Changes", name: "structuralChanges", options: ["Significant structural changes", "Some structural changes", "No structural changes"] },
                        { label: "Plumbing Changes", name: "plumbingChanges", options: ["Major plumbing changes", "Minor alterations, more scope", "Minor plumbing changes"] },
                        { label: "Fixtures and Fittings", name: "fixturesAndFittings", options: ["Custom-made joinery and heated towel rails", "Mid-range fixtures and fittings", "Entry-level fixtures and fittings"] },
                        { label: "Mirror or Cabinet", name: "mirrorOrCabinet", options: ["Custom shave cabinet with LED strip lighting", "Shave cabinets", "Standard mirror"] },
                        { label: "Tiling", name: "tiling", options: ["Feature tiles, mosaics, and premium-quality tiling", "Fully tiled to the ceiling", "Tiling walls minimum requirements"] },
                        { label: "Small Step-up", name: "smallStepUp", options: ["Fully recessed floor with zero threshold", "Recessed shower bases", "Small step-up into the shower base"] },
                    ].map((field, index) => (
                        <div key={index} className="facebook-form-group">
                            <label className="facebook-label">{field.label}:</label>
                            <select
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="facebook-select"
                            >
                                <option value="">Select {field.label}</option>
                                {field.options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {formErrors[field.name] && <span className="facebook-error">{formErrors[field.name]}</span>}
                        </div>
                    ))}
                    <button type="submit" className="facebook-button">
                        Submit
                    </button>
                </form>
                {result && (
                    <div className="facebook-result">
                        <h3>Result</h3>
                        <p>Name: {result.name}</p>
                        <p>Average Price Range: {result.averagePriceRange}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
