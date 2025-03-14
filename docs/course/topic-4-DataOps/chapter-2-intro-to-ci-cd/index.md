---
title: Chapter 2 - Intro to CI/CD
layout: custom
parent: Topic 4 - DataOps
has_children: false
has_toc: false
nav_order: 2
---

# Introduction to CI/CD
<p>CI/CD, short for <strong>Continuous Integration and Continuous Delivery</strong>, is a part of the DevOps process. “It is a collection of principles and practices designed to help development teams ensure the reliable delivery of frequent code changes.”</p>

<div style="text-align: center;">
    <img src="https://www.mindtheproduct.com/wp-content/uploads/2015/12/409-images-for-snap-blog-postedit_image3-auto.png" alt="CI/CD Lifecycle" style="max-width: 50%; height: auto; margin: 0 auto;">
    <p><em>Source: <a href="http://www.mindtheproduct.com/what-the-hell-are-ci-cd-and-devops-a-cheatsheet-for-the-rest-of-us/">Mind The Product</a></em></p>

</div>

## DevOps vs. CI/CD
<!-- 
<style>
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  th {
    background-color: #333;
    color: #fff;
  }
  th:last-child,
  td:last-child {
    border-right: none;
  }
  ul {
    list-style-type: disc;
    margin-top: 0;
    padding-left: 20px; /* Adjusted padding for the bullets */
  }
  ul li {
    margin-bottom: 5px;
  }
</style>
-->
<table>
  <tr>
    <th>Category</th>
    <th>DevOps</th>
    <th>CI</th>
    <th>CD</th>
  </tr>
  <tr>
    <td><strong>Purpose</strong></td>
    <td>Facilitate collaboration and efficiency across the development lifecycle.</td>
    <td>Automate testing to ensure code compatibility.</td>
    <td>Automate deployment for seamless software releases.</td>
  </tr>
  <tr>
    <td><strong>Methods</strong></td>
    <td>
      <ul>
        <li>Implement automation to streamline collaboration between development and operations teams.</li>
        <li>Use infrastructure as code (IaC) to provision and manage infrastructure.</li>
        <li>Integrate continuous feedback loops to gather insights from stakeholders and improve processes iteratively.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Automate the build and testing process for every code change.</li>
        <li>Identify integration issues early in the development lifecycle.</li>
        <li>Support the principle of "fail fast" by providing rapid feedback to developers.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Encompass both Continuous Integration and Continuous Deployment.</li>
        <li>Automate the deployment process to production environments.</li>
        <li>Enable organizations to release software updates quickly and reliably while minimizing risks.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Key Benefits</strong></td>
    <td>
      <ul>
        <li>Promotes a culture of shared responsibility and accountability.</li>
        <li>Emphasizes the importance of automating repetitive tasks to reduce manual errors and increase efficiency.</li>
        <li>Focuses on delivering value to customers through rapid and iterative development cycles.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Increases code quality by identifying issues early in the development process.</li>
        <li>Speeds up the development cycle by automating build and testing processes.</li>
        <li>Enables rapid feedback to developers for quick iterations.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Accelerates time to market by automating deployment processes.</li>
        <li>Minimizes risks associated with manual deployments.</li>
        <li>Enhances overall software reliability and stability.</li>
      </ul>
    </td>
  </tr>
</table>

### References 
<details>
  <Summary>Expand</Summary>
    <b>1.</b> Ashtari, Hossein et al. “Key Differences between CI/CD and DevOps.” <i>Spiceworks</i>, <a href="http://www.spiceworks.com/tech/devops/articles/cicd-vs-devops/" target="_blank">www.spiceworks.com/tech/devops/articles/cicd-vs-devops/</a>. Accessed 20 Feb. 2024.<br>
    <b>2.</b> Ferringer, Megan. “Here’s the Difference between CI/CD and Devops-and How They Work Together to Drive Innovation.” <i>Navisite</i>, 2 Mar. 2023, <a href="http://www.navisite.com/blog/insights/ci-cd-vs-devops/" target="_blank">www.navisite.com/blog/insights/ci-cd-vs-devops/</a>.<br>
    <b>3.</b> “What the Hell Are CI/CD and DevOps? A Cheatsheet for the Rest of Us.” <i>Mind the Product</i>, <a href="http://www.mindtheproduct.com/what-the-hell-are-ci-cd-and-devops-a-cheatsheet-for-the-rest-of-us/" target="_blank">www.mindtheproduct.com/what-the-hell-are-ci-cd-and-devops-a-cheatsheet-for-the-rest-of-us/</a>. Accessed 20 Feb. 2024.<br>
    <b>4.</b> “The IDEAL & Practical CI / CD Pipeline - Concepts Overview.” <i>YouTube</i>, 17 Feb. 2022, <a href="https://www.youtube.com/watch?v=OPwU3UWCxhw" target="_blank">www.youtube.com/watch?v=OPwU3UWCxhw</a>.<br>
    <b>5.</b> Morg, Brad. “How to Design a Modern CI/CD Pipeline.” <i>YouTube</i>, 17 Oct. 2023, <a href="https://www.youtube.com/watch?v=KnSBNd3b0qI" target="_blank">www.youtube.com/watch?v=KnSBNd3b0qI</a>.<br>
    <b>6.</b> Morg, Brad. “How to Design a Deployment Pipeline (GitOps).” <i>YouTube</i>, 30 Oct. 2023, <a href="https://www.youtube.com/watch?v=pJ9f7w4AxtU" target="_blank">www.youtube.com/watch?v=pJ9f7w4AxtU</a>.<br>
</details>
