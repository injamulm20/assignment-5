
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById শুধুমাত্র একটি এলিমেন্ট রিটার্ন করে। 
getElementByClassName একাধিক এলিমেন্ট রিটার্ন করে। 
querySelector এটি সিএসএস সিলেক্টর ব্যবহার করে প্রথমে যে সেটিকে রিটার্ন করে দেয় 
querySelectorAll ইট ইজ সিএসএস সেক্টর ব্যবহার করে সবগুলো ম্যাচিং এলিমেন্ট কে নোড লিস্ট আকারে বিধান করে।

2. How do you create and insert a new element into the DOM?

let newDiv = document.createElement("div");
newDiv.innerText = "Hello World";
document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

যখন কোনো child element-এ event ক্লিক হয়, সেটা প্রথমে child element এ trigger হয় তারপর parent এ যায় তারপর আরও উপরের parent পর্যন্ত যায়। এই ধাপে ধাপে উপরে উঠার প্রক্রিয়াকে Event Bubbling বলে।

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation মানে হলো parent element এ event listener বসিয়ে তারপর event bubbling এর মাধ্যমে child elements গুলোকে handle করা।

5.  is the difference between preventDefault() and stopPropagation() methods?

preventDefault() কোনো element এর default behavior বন্ধ করে।
stopPropagation() Event bubbling  বন্ধ করে। মানে event parent element এ যেতে পারবে না।


