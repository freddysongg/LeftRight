# LeftRight

**A Political Alignment Trivia Game**

## **Project Overview**
**LeftRight** is an engaging political alignment quiz web application designed with a modern swiping interface. Mimicking the interaction style of Tinder, users can swipe right to agree or left to disagree with a series of trivia questions. The game calculates their political alignment based on their responses and provides a summary of their alignment in a results screen.

---

## **Features**

### **Interactive Swiping Mechanic**
- Users interact by swiping cards left or right to answer questions.
- Each swipe indicates agreement (right) or disagreement (left) with the question.

### **Dynamic Question Selection**
- Questions are dynamically selected and shuffled from four predefined categories: Economic, Social, Foreign, and Domestic.
- Ensures a balanced question set for each quiz session.

### **Real-Time Feedback**
- Swipes are registered instantly, and the interface updates dynamically.
- Smooth animations enhance user experience.

### **Political Alignment Calculation**
- Uses user responses to calculate their political alignment (e.g., left-leaning, right-leaning, or centrist).
- Displays results on a dedicated summary screen.

### **Responsive Design**
- Optimized for mobile, tablet, and desktop devices.
- Dynamically adjusts padding and card heights to prevent overflow and ensure usability.

### **Toast Notifications**
- Provides feedback for specific actions (e.g., copying a link) using toast notifications.

---

## **Technical Stack**

### **Frontend**
- **React + TypeScript:**
  - Provides a type-safe and modular structure for building interactive UI components.
  - Key components:
    - `CardStack`: Manages the stack of swipable cards.
    - `QuestionCard`: Displays individual trivia cards.
    - `ResultScreen`: Shows the user's political alignment after completing the quiz.

- **Framer Motion:**
  - Enables smooth animations for swiping and gestures.
  - Handles drag gestures for interactive swiping mechanics.

- **Tailwind CSS:**
  - Ensures clean, utility-first responsive styling.

### **State Management**
- **useState and useEffect:**
  - Tracks game state, user responses, and whether the game is complete.

### **Data Handling**
- **Dynamic Question Selection:**
  - Shuffles and selects questions using `lodash.shuffle`.
  - Categorizes questions to ensure balanced representation.

### **Responsive Design**
- Uses a custom `useDeviceType` hook to detect device type and adjust layout dynamically.
- Ensures a consistent experience across screen sizes.

---

## **Game Mechanics**

### **Question Handling**
- Questions are divided into four categories:
  - Economic, Social, Foreign, Domestic.
- Three questions are selected randomly from each category.

### **Swiping Interaction**
- Users swipe cards left to disagree or right to agree.
- Swipes trigger animations and update the user’s responses.

### **Result Calculation**
- A custom alignment algorithm processes the responses and determines the user's political stance.
- Results are displayed in a visually appealing summary screen.

---

## **How It Works**

### **User Flow**
1. Users start the quiz by swiping through trivia cards.
2. For each question, users swipe left or right to register their responses.
3. After all questions are answered, the app calculates their political alignment and displays the result.

### **Technical Flow**
1. On initialization:
   - Questions are shuffled and categorized.
   - State variables (`responses`, `gameComplete`, etc.) are initialized.
2. During the game:
   - Swiping a card updates the `responses` state.
   - Animation and feedback are provided in real-time.
3. After the game:
   - Results are calculated using `calculateAlignment`.
   - The result screen is displayed.

---

## **Challenges Addressed**

### **Dynamic Layout Management**
- Resolved overflow and spacing issues by dynamically adjusting padding and height based on the device type.

### **Smooth Animations**
- Optimized swipe animations with Framer Motion to ensure responsiveness on mobile and desktop.

### **User Engagement**
- Designed a modern, intuitive interface to make the game fun and accessible.

---

## **Potential Extensions**
1. **Customizable Questions:**
   - Allow users to add or select questions for a personalized experience.

2. **Social Sharing:**
   - Enable users to share their results on social media platforms.

3. **Detailed Analysis:**
   - Provide detailed insights and breakdowns of the user’s political alignment.

4. **Gamification:**
   - Introduce badges or achievements to enhance engagement.

5. **AI-Generated Questions:**
   - Use AI to dynamically generate unique questions tailored to user preferences.

---

## **Testing and Debugging**

### **Debugging Swipe Performance**
- Use Chrome DevTools to analyze performance and FPS.
- Optimize animations and event handlers for responsiveness.

### **Responsive Testing**
- Test on different devices using browser DevTools or physical devices.

---

## **Acknowledgments**
- Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion.
- Inspired by interactive quiz platforms and swipe-based apps like Tinder.

