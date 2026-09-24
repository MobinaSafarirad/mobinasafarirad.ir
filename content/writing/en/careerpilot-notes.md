---

title: "Building CareerPilot"

date: "2026-03-01"

category: "Build Report"

description: "What building CareerPilot taught me about personality data, skill scoring, machine learning, and turning a prototype into a real software project."

tags:

  - CareerPilot

  - Machine Learning

  - Python

  - Software Development

  - Artificial Intelligence

placeholder: false

---

CareerPilot started with a fairly simple idea: build something that could help people think about their future career instead of giving them a generic quiz result and leaving them there.

The first version was much smaller than what CareerPilot eventually became. As I kept working on it, I realized that the interesting part wasn't just training a model. I had to figure out how to represent personality and skills as data, how to score those inputs consistently, how to connect the result to a machine-learning model, and how to turn the whole thing into software that someone could actually use.

CareerPilot AI v2.0 became a much bigger project. It combines personality assessment, skill scoring and calibration, machine-learning prediction, career data, persistent local storage, a desktop interface, localization, and a structure that can be extended in future versions.

**## What I built first**

I started with the core idea of using a user's answers to generate a profile of their skills and then connecting that profile to possible career paths.

The personality assessment became the main input of the system. Each answer contributes differently to the underlying skills, so the application doesn't simply treat every answer as a yes-or-no decision.

From there, I built the scoring layer. The raw points are converted into normalized skill scores so that different skills can be represented on the same 0–10 scale. I also added a calibration step instead of assuming that the raw maximum for every skill automatically represented a meaningful "10."

Once the scoring pipeline was working, I could use the resulting skill vector as structured input for the machine-learning side of the project.

**## Where machine learning came in**

The machine-learning component is used to predict a career from the user's resulting skill profile.

For the current version, I used Logistic Regression rather than choosing a more complicated model just because it sounded more advanced. The feature space is relatively compact, and using a model that I can understand and inspect is more useful for this project than adding complexity for its own sake.

The trained model is saved separately so the application can load it when needed instead of retraining it every time the program starts.

This distinction is important to me: the ML model makes a prediction, while the career data contains the information that the application shows around that prediction. Those are two different responsibilities.

**## The part that was harder than expected**

The hardest part wasn't writing one particular function.

It was making all the pieces agree with each other.

The scoring system had to produce the same feature structure that the training pipeline expected. The model had to be separated from the career metadata. User data had to persist between sessions. The application had to handle its different components without turning into one huge Python file.

This was also where I started noticing the difference between a prototype and an actual software project.

A prototype can work once.

A real project needs to keep working when you add another feature, change the data, modify the UI, or build another version.

**## What went wrong**

CareerPilot went through several iterations, and some of my early decisions didn't age very well.

One of the biggest lessons was documentation drift. It's easy for a README or an early description to say one thing while the actual implementation has already moved somewhere else. The model, training code, data, and documentation all need to describe the same system.

I also learned that local development hides a lot of assumptions. A project can work perfectly on one machine because the paths, dependencies, Python environment, and local files happen to be exactly what the code expects.

That doesn't automatically mean the project is portable.

These problems weren't failures of the project as much as they were useful signals showing me where the architecture needed to become more deliberate.

**## What changed in version 2**

Version 2 was my attempt to stop treating CareerPilot as a collection of scripts and start treating it as a software product.

The project became modular, with separate responsibilities for the application flow, personality assessment, scoring, machine learning, career information, storage, localization, and the user interface.

I also introduced persistent local storage and separated application data from the trained model.

The result is a system that is much easier to reason about and gives me a better foundation for future versions.

**## What I learned**

CareerPilot changed the way I look at AI projects.

Before building it, it was easy to think of an AI project as:

data → model → prediction.

In practice, there is a lot more between those steps.

Data representation matters. Feature consistency matters. Scoring logic matters. The way the model is trained has to match the way it is used later. The UI has to communicate the output without making claims that the model cannot support.

I also learned that a machine-learning model doesn't automatically make a product intelligent. The surrounding software determines whether the model can actually be used in a meaningful way.

**## What I would improve next**

The biggest improvement I want to make is the recommendation system itself.

The current system is still a project rather than a scientifically validated career-assessment platform, so I don't want to pretend that its predictions are more reliable than the underlying data allows.

The next steps would be improving the training dataset, expanding the career taxonomy, evaluating the model with stronger validation methods and meaningful metrics, making career information easier to update, and eventually testing the system with real users.

If those parts become strong enough, CareerPilot could move beyond being a portfolio project and become something genuinely useful.

For now, I'm happy with what it represents: a project where I had to bring together Python, software architecture, data, machine learning, and product thinking instead of learning each one separately.