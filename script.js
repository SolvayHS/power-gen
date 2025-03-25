document.addEventListener("DOMContentLoaded", function() {
    console.log("Charmed Power Generator is ready!");

    // Power options for different alignments
    const powers = {
        good: [
            "Healing Power", 
            "Orbing", 
            "Telekinesis", 
            "Empathy", 
            "Aura Reading", 
            "Molecular Combustion",
            "Time Freeze", 
            "Levitation", 
            "Telepathy", 
            "Premonitions", 
            "Invisibility", 
            "Energy Projection", 
            "Sensing Powers", 
            "Clairvoyance", 
            "Force Field Generation", 
            "Animal Communication", 
            "Healing Touch", 
            "Energy Shield", 
            "Elemental Control (Fire)", 
            "Elemental Control (Earth)", 
            "Elemental Control (Air)", 
            "Elemental Control (Water)", 
            "Astral Projection", 
            "Invisibility Cloak", 
            "Matter Manipulation", 
            "Sound Manipulation", 
            "Flash Healing", 
            "Power Duplication", 
            "Energy Absorption", 
            "Teleportation",
            "Light Manipulation",
            "Time Manipulation",
            "Gravity Manipulation",
            "Force Field Creation",
            "Superhuman Speed",
            "Superhuman Strength",
            "Mental Protection",
            "Power Inhibition",
            "Magical Wards",
            "Dimensional Travel",
            "Subtle Manipulation",
            "Astral Manipulation",
            "Emotional Healing",
            "Animal Shapeshifting",
            "Energy Perception",
            "Flight",
            "Soul Reading",
            "Life Force Restoration",
            "Reality Perception",
            "Elemental Summoning",
            "Teleportation Resistance",
            "Magnetic Manipulation",
            "Water Bending",
            "Pyrokinesis (Fire Manipulation)",
            "Healing through Potions",
            "Aura Purification",
            "Truth Detection",
            "Illumination",
            "Reality Repair",
            "Enhanced Reflexes"
        ],
        neutral: [
            "Levitation", 
            "Invisibility", 
            "Telepathy", 
            "Element Manipulation", 
            "Precognition", 
            "Telekinesis", 
            "Aura Manipulation", 
            "Sound Manipulation", 
            "Illusion Creation", 
            "Emotion Control", 
            "Shape-shifting", 
            "Scrying", 
            "Time Travel", 
            "Clairvoyance", 
            "Matter Manipulation", 
            "Healing Through Touch", 
            "Energy Manipulation", 
            "Reality Warping", 
            "Dream Walking", 
            "Psychometry", 
            "Summoning", 
            "Summon Entities", 
            "Body Switching", 
            "Foresight", 
            "Memory Erasure", 
            "Superhuman Speed", 
            "Superhuman Strength", 
            "Astral Projection", 
            "Force Field Generation", 
            "Mind Control", 
            "Dimensional Opening", 
            "Energy Pulse", 
            "Reality Distortion", 
            "Cloaking", 
            "Emotion Detection",
            "Siphoning Energy",
            "Energy Shielding",
            "Spirit Communication",
            "Quantum Manipulation",
            "Life Force Siphon",
            "Teleportation Resistance",
            "Shapeshifting",
            "Time Perception",
            "Energy Explosion",
            "Emotional Manifestation",
            "Psychic Projection",
            "Soundwave Manipulation",
            "Seer Powers",
            "Dark Scrying",
            "Elder Communication",
            "Elemental Fusion",
            "Light Absorption",
            "Psychic Teleportation",
            "Healing Transfer",
            "Illusory Transformation",
            "Astral Binding",
            "Molecular Shifting",
            "Future Manipulation",
            "Sealing Powers",
            "Dimensional Movement"
        ],
        bad: [
            "Fire Manipulation", 
            "Energy Draining", 
            "Mind Control", 
            "Shape-Shifting", 
            "Cloaking", 
            "Power Stealing", 
            "Darkness Manipulation", 
            "Necromancy", 
            "Cursing", 
            "Vampirism", 
            "Summon Demons", 
            "Vampiric Healing", 
            "Energy Poisoning", 
            "Infernal Teleportation", 
            "Illusion Casting", 
            "Possession", 
            "Shadow Manipulation", 
            "Soul Stealing", 
            "Blood Magic", 
            "Manipulate Memories", 
            "Reality Bending", 
            "Nightmare Inducement", 
            "Decay Inducement", 
            "Flesh Shaping", 
            "Dark Scrying", 
            "Elemental Dark Magic", 
            "Death Curse", 
            "Time Warping", 
            "Dark Healing", 
            "Forbidden Rituals", 
            "Vampire Transformation", 
            "Dark Matter Creation", 
            "Soul Corruption", 
            "Life Leeching", 
            "Chaos Manipulation", 
            "Dark Summoning", 
            "Possession Resistance", 
            "Astral Possession", 
            "Blood Cursing", 
            "Shadow Walking", 
            "Life Force Drain", 
            "Vengeful Telekinesis", 
            "Life Force Reversal", 
            "Soul Binding", 
            "Demon Resurrecting", 
            "Necrotic Healing", 
            "Power Transference", 
            "Siphoning Life Energy", 
            "Illusion Control", 
            "Necrotic Summoning", 
            "Energy Containment", 
            "Demonic Transformation", 
            "Time Distortion", 
            "Possession Immunity", 
            "Dark Energy Manipulation", 
            "Psychic Manipulation", 
            "Cloak of Fear",
            "Mind Twist",
            "Fatal Touch"
        ]
    };

    // Handle form submission to generate powers
    document.getElementById("power-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input for alignment and number of powers
        const alignment = document.getElementById("alignment").value;
        const numPowers = parseInt(document.getElementById("num-powers").value);
        
        // Randomly select powers based on alignment
        const availablePowers = powers[alignment];
        const selectedPowers = [];
        
        // Randomly select unique powers
        while (selectedPowers.length < numPowers) {
            const randomIndex = Math.floor(Math.random() * availablePowers.length);
            const power = availablePowers[randomIndex];
            if (!selectedPowers.includes(power)) {
                selectedPowers.push(power);
            }
        }

        // Display generated powers
        const powerList = document.getElementById("power-list");
        powerList.innerHTML = ""; // Clear previous results
        selectedPowers.forEach(function(power) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            powerList.appendChild(listItem);
        });
    });
});
