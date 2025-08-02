import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeStringify)

const value = `
  ## Job Resposibilities
  
  ---
  
  ### Project 1: Revolutionizing Document Analysis
      
  One of my earliest challenges was tackling the time-consuming task of analyzing long, unstructured documents. Traditional methods 
  could take days, but I saw an opportunity to revolutionize this process. Using **Streamlit** and **LangChain**, I developed a chatbot 
  application that could summarize these documents in minutes. The key to this breakthrough was implementing a map-reduce workflow, 
  which allowed us to split documents into smaller, manageable batches. Each batch was summarized individually, and the results were 
  combined to form a coherent summary. To ensure accuracy, I integrated a RAG (Retrieval-Augmented Generation) vector store, which 
  verified the outputs against the source documents, eliminating LLM hallucinations. This innovation significantly reduced analysis 
  time, making document review faster and more reliable.
  
  ---
  
  ### Project 2: Automating Manufacturing Efficiency
      
  Next, I turned my attention to the manufacturing sector, where efficiency and real-time tracking are crucial. I designed and deployed 
  a full-stack application using **Next.js** and **PostgreSQL**, incorporating NFC tags to automate file tracking at a manufacturing site. 
  To provide stakeholders with real-time insights, I integrated a **PowerBI dashboard** that displayed operational efficiency and key 
  performance metrics. To enhance development speeds, I containerized the application code and the database using **Docker**, achieving a 
  20% improvement in development times. This project not only automated critical processes but also provided valuable insights that drove 
  operational improvements.
  
  --- 
  
  ### Project 3: Enhancing Data Streaming Reliability
  
  Data streaming is a cornerstone of modern data infrastructure, and I saw an opportunity to improve its reliability and accuracy. I 
  engineered a custom **JDBC Kafka source connector** with support for incremental versioning. This connector ensured accurate and 
  efficient data streaming by dynamically tracking and updating Kafka topics with the latest data changes from **PostgreSQL**. This 
  innovation enhanced the reliability of data streaming, making it a crucial component of our data infrastructure.
  
  ---
  
  ### Project 4: Predictive Modeling for Manufacturing
  
  In the manufacturing sector, predictive modeling can significantly enhance operational efficiency. I trained and deployed an object 
  detection model using **Ultralytics YOLOv11** and **MLflow** to predict the number of canes produced in manufacturing batches. The 
  model achieved an impressive 99.7% accuracy on the test set, although there were a few instances of incorrect detection due to background 
  segments being misclassified as canes. Importantly, no actual canes were overlooked during testing, making the model a valuable tool for 
  enhancing manufacturing processes.
  
  
  ### Key Achievements
    1. Reduced Document Analysis Time: By implementing advanced workflows for summarization, I significantly reduced the time required for document analysis.
    2. Enhanced Manufacturing Efficiency: Through automation and real-time tracking, I improved manufacturing efficiency by 30%.
    3. Improved Data Streaming: With custom Kafka connectors, I enhanced the reliability and accuracy of data streaming.
    4. Deployed Predictive Models: By utilizing predictive models, I assisted in manufacturing processes, driving actionable insights and operational improvements.
  `
const file = await processor.process(value)

console.log(String(file))