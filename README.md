# Test Answers - K V Karthik
## Part A
## 1) Mention the working of Internet Website in Terms of Front-end & Back-end Divisions
### Front end
The front-end part of a website, also known as the client-side, refers to the part of the website that the user interacts with directly. 

### Back End
- The back-end part of a website, also known as the server-side, handles the processing, storage, and retrieval of data, as well as the logic and functionality of the website. 

### Working
- When a user interacts with frontend elements, such as submitting a form or clicking a button, the frontend captures the input and sends it to the backend. 
- The backend receives the HTTP request from the frontend. It processes the request, extracting relevant data, and performing any necessary actions based on the request type and data received. This can include tasks like validating data, interacting with databases, executing business logic, or integrating with external services or APIs.
- After processing the request the frontend receives the HTTP response from the backend. It interprets the response, extracting the necessary data and content. The frontend then uses this data to update the user interface, display new information, or trigger specific actions. It renders the received content, applying styles, layout, and interactivity as defined in the frontend code.
- The cycle of user interaction, frontend handling, request sending, backend processing, and response rendering continues as long as the user interacts with the website.

## 2)  What are tags in HTML? Explain the each category of tag with an Example.
In HTML, tags are used to define the structure and elements of a web page. Tags are enclosed within angle brackets (<>) and come in pairs: an opening tag and a closing tag. The opening tag denotes the beginning of an element, while the closing tag denotes the end of that element. Some tags are:
### i. Heading tags
Heading tags are used to define the headings or titles on a webpage. There are six levels of heading tags, from h1 to h6. The h1 tag represents the highest level of heading, and h6 represents the lowest. Example:
<h1>This is a h1 heading</h1>
<h6>This is a h6 heading</h6>

### ii. Paragraph tags
Paragraph tags define blocks of text within a webpage. The <p> tag represents a paragraph. Example:
<p>This is one paragraph</p>
<p>This is another paragraph</p>

### iii. Link tags
Link tags are used to create hyperlinks or anchor links on a webpage. The <a> tag is used for links. The href attribute specifies the URL to link to. Example:
<a href="https://www.example.com">Visit Example</a>

### iv. Image tags
Image tags are used to display images on a webpage. The <img> tag is used, and the src attribute specifies the image file's URL or path. 

### v. List tags
List tags are used to create ordered (numbered) and unordered (bulleted) lists. The <ul> tag represents an unordered list, and the <ol> tag represents an ordered list. Each list item is denoted by the <li> tag. Example:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>


## 3) Explain the working Procedure of Virtual DOM.
The Virtual DOM (Document Object Model) is a concept used in web development frameworks, such as React, to improve the performance and efficiency of updating the user interface (UI) of a web application.
- Initial Rendering: When a web application is loaded, Virtual DOM is created.
- Creating Virtual DOM tree: The Virtual DOM tree is a representation of the structure and elements of the UI. It is created by mapping the components or elements of the application to corresponding Virtual DOM elements.
- Rendering Virtual DOM into Actual DOM: The Virtual DOM is then rendered to the actual DOM for the initial display of the web application. The Virtual DOM elements are transformed into actual DOM elements and inserted into the browser's document structure.
- Handling user interactions and input: Instead of directly updating the actual DOM, the Virtual DOM is used to calculate the difference between the previous state and the new state of the application. This process is known as reconciliation or diffing.
- Updating the Actual DOM: Only the identified differences or updates are applied to the actual DOM, rather than re-rendering the entire UI. This selective update helps minimize the number of actual DOM manipulations, which can be computationally expensive and slow.
- Re-rendering the UI: The updated Virtual DOM is rendered to the actual DOM, reflecting the changes made in the application's state. The UI is now in sync with the updated state, providing an updated user experience.

## 4) Mention some Differences between MySQL and No SQL
### MySQL:
- Relational database management system
- Uses structured query language (SQL)
- Follows a predefined schema
- Suitable for structured and tabular data
- Supports complex relational queries
- Vertically scalable with additional options for horizontal scaling
- Commonly used for content management systems, e-commerce platforms, financial systems

### NoSQL:
- Non-relational database management system
- Offers various data models (key-value, document, columnar, graph)
- Flexible and dynamic schema structures
- Horizontally scalable with ease
- Query languages specific to data models
- Emphasizes fast read/write operations
- Suitable for large-scale data, high-speed data ingestion, real-time analytics
- Used in social media platforms, IoT systems, event logging systems



