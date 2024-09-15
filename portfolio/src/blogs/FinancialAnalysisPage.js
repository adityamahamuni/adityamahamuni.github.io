import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlowDiagram from "./FlowDiagram";
import { FaPython } from "react-icons/fa"; // Python Icon
import { SiPandas, SiNumpy, SiScikitlearn, SiPlotly } from "react-icons/si"; // Libraries Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for open/close
import TableOfContents from "./toc";

const FinancialAnalysisPage = ({ darkMode }) => {
  // useState hook to handle toggle of Table of Contents
  const [tocVisible, setTocVisible] = useState(false);

  // Function to toggle Table of Contents visibility
  const toggleToc = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Breadcrumbs */}
      <nav className="breadcrumb mb-6 text-gray-500">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </Link>
        <span className="mx-2">{">>"}</span>
        <Link
          to="/projects"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Projects
        </Link>
        <span className="mx-2">{">>"}</span>
        <span>Clustering and Regression Analysis</span>
      </nav>

      {/* Introduction Section */}
      <section id="introduction" className="my-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-green-400">
          <a
            href="https://github.com/adityamahamuni/DataAnalytics/tree/main/NYSE_Stock_Analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clustering and Regression Analysis of Financial Health and Stock
            Performance
          </a>
        </h1>
        <p className="text-lg">
          Understanding a company's financial health is key for investment
          decisions. This project clusters companies based on their financial
          metrics and predicts stock prices to assess financial resilience. By
          combining clustering and regression analysis, we uncover insights that
          drive better investment decisions and risk management.
        </p>
      </section>

      <section className="my-8">
        <TableOfContents />
      </section>


      {/* Problem Statement Section */}
      <section id="problem-statement" className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Problem Statement
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          The financial health of companies is a critical determinant of their
          stock performance and overall market stability. Investors and risk
          managers rely on comprehensive analyses of financial metrics to make
          informed decisions. Predicting stock prices and understanding
          financial resilience are key components of financial risk management.
          However, identifying patterns within financial data that provide
          meaningful insights remains a challenge.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Research Questions
        </h3>
        <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
          <li className="text-lg">
            What financial metrics can accurately assess a company's financial
            health and predict future performance?
          </li>
          <li className="text-lg">
            How can companies be grouped based on their financial profiles, and
            what are the characteristics of each group?
          </li>
          <li className="text-lg">
            Which financial factors contribute most strongly to a company being
            classified as high-risk or low-risk?
          </li>
          <li className="text-lg">
            How can clustering techniques help identify patterns of
            profitability, risk, and resilience among companies?
          </li>
        </ul>
      </section>

      {/* Dataset and Technologies Section */}
      <section id="dataset-technologies" className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          Dataset and Technologies Used
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center text-lg text-black dark:text-white">
            <strong>Dataset:</strong>{" "}
            <a
              href="https://www.kaggle.com/datasets/dgawlik/nyse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-black dark:text-white rounded hover:bg-black hover:text-white"
            >
              NYSE Stock Prices and Fundamentals Data from Kaggle
            </a>
          </li>
          <li className="flex items-center text-lg text-black dark:text-white">
            <strong>Technologies:</strong> Python{" "}
            <FaPython className="mr-2 text-3xl" />
            Pandas <SiPandas className="mr-2 text-3xl" />, Numpy{" "}
            <SiNumpy className="mx-2 text-3xl" />, Scikit-learn{" "}
            <SiScikitlearn className="mx-2 text-3xl" />, Matplotlib, Seaborn,
            Plotly <SiPlotly className="mx-2 text-3xl" />
          </li>
        </ul>
      </section>

      <section className="my-8">
        <FlowDiagram />
      </section>

      {/* Data Cleaning and EDA Section */}
      <section id="data-cleaning-eda" className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          Data Cleaning and Exploratory Data Analysis (EDA)
        </h2>
        <p className="text-lg">
          The data cleaning process involved handling missing values, removing
          duplicates, and converting dates for proper analysis. We checked for
          duplicates, missing values, and performed various transformations to
          prepare the dataset for modeling.
        </p>
        <p className="text-lg">
          The EDA phase included creating visualizations such as histograms and
          correlation matrices to understand the distribution and relationships
          between key financial metrics. Below is a correlation matrix
          visualized for key financial metrics, which helps uncover linear
          relationships between variables such as Total Revenue, Net Income,
          Gross Profit, and more.
        </p>
        <img
          src="financialAnalysisProject/correlation.png"
          alt="Correlation Matrix"
          className="my-4 w-3/4 h-auto mx-auto"
        />
        <p className="text-lg">
          We also identified highly correlated variables for deeper analysis.
          These include metrics such as Operating Income, Accounts Receivable,
          and Earnings Before Interest and Tax. Understanding these
          relationships is crucial for assessing a company's financial health
          and resilience.
        </p>
      </section>

      {/* Clustering Analysis Section */}
      <section id="clustering-analysis" className="my-8 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Clustering Analysis
        </h2>

        <p className="text-lg mb-6 text-justify">
          Using K-Means clustering, companies were grouped based on their
          financial health. The optimal number of clusters was determined using
          the Elbow Method. The chart below visualizes the elbow curve, showing
          five clusters as the optimal number.
        </p>

        <img
          src="financialAnalysisProject/elbow.png"
          alt="Elbow Method for Optimal Clusters"
          className="my-4 w-3/4 h-auto mx-auto"
        />

        <p className="text-lg mb-6 text-justify">
          Once the number of clusters was identified, K-Means clustering was
          applied to group companies based on financial metrics such as Total
          Revenue, Operating Income, Net Income, and others. The chart below
          shows a 2D visualization of the clusters using Principal Component
          Analysis (PCA).
        </p>

        <img
          src="financialAnalysisProject/kmeans.png"
          alt="K-Means Clustering"
          className="my-4 w-3/4 h-auto mx-auto"
        />

        <p className="text-lg mb-6 text-justify">
          The clusters represent distinct financial profiles, with certain
          clusters showing higher profitability and lower liabilities than
          others. This insight helps assess companies' financial health and
          potential resilience.
        </p>

        {/* Cluster Analysis and Insights */}
        <h3 className="text-xl font-semibold mt-8 mb-4">
          Cluster Analysis and Insights
        </h3>

        <p className="text-lg mb-6 text-justify">
          The clustering process allowed us to group companies with similar
          financial profiles. The charts below represent the Total Revenue and
          Net Income distribution across different clusters, highlighting the
          differences in revenue between each cluster.
        </p>

        {/* Flexbox for side-by-side images */}
        <div className="flex justify-center items-center gap-6">
          <img
            src="financialAnalysisProject/revenueByCluster.png"
            alt="Total Revenue by Cluster"
            className="w-1/2 h-auto"
          />

          <img
            src="financialAnalysisProject/NetIncomeByCluster.png"
            alt="Net Income by Cluster"
            className="w-1/2 h-auto"
          />
        </div>

        {/* Pie Chart Section */}
        <div className="flex justify-between items-center my-8">
          <div className="w-1/3 pr-8">
            <p className="text-lg">
              Additionally, the pie chart shows the percentage of companies in
              each cluster, giving an overview of how companies are distributed
              based on their financial health.
            </p>
          </div>

          <div className="w-2/3">
            <img
              src="financialAnalysisProject/percentCompanies.png"
              alt="Percentage of Companies in each Cluster"
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="text-lg text-justify">
          By analyzing the clusters, it was identified that Cluster 0 contains
          the majority of companies with balanced revenue and profitability. In
          contrast, Cluster 2 contains high-revenue companies, such as AAPL,
          MSFT, and XOM.
        </p>
      </section>

      {/* Clustering Insights Section */}
      <section className="my-8 p-6 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Key Insights
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">
              Highly profitable companies
            </strong>{" "}
            with strong operating income and revenue were clustered together,
            indicating{" "}
            <strong className="text-gray-800 dark:text-white">
              strong financial resilience
            </strong>
            .
          </li>
          <li className="text-lg">
            Companies with{" "}
            <strong className="text-gray-800 dark:text-white">
              moderate profitability
            </strong>{" "}
            but high liabilities were classified as{" "}
            <strong className="text-gray-800 dark:text-white">
              higher risk
            </strong>
            , suggesting the need for cautious investment strategies.
          </li>
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">Cluster 0</strong>{" "}
            contains the largest group of companies with{" "}
            <strong className="text-gray-800 dark:text-white">
              balanced financial metrics
            </strong>
            , while{" "}
            <strong className="text-gray-800 dark:text-white">Cluster 2</strong>{" "}
            consists of high-revenue companies such as AAPL, MSFT, and XOM.
          </li>
        </ul>
        <p className="text-lg mt-6 text-gray-700 dark:text-gray-300">
          The clustering analysis has provided{" "}
          <strong className="text-gray-800 dark:text-white">
            valuable insights
          </strong>{" "}
          into the financial health of companies, allowing for more informed
          decision-making regarding{" "}
          <strong className="text-gray-800 dark:text-white">risk</strong> and{" "}
          <strong className="text-gray-800 dark:text-white">
            growth potential
          </strong>
          .
        </p>
      </section>

      {/* Regression Analysis Section */}
      <section id="regression-analysis" className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Regression Analysis
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          Regression analysis is a powerful tool for understanding the
          relationships between financial metrics and predicting company
          performance. By analyzing key indicators such as Total Revenue, Net
          Income, and Operating Income, we can assess their impact on a
          company's stock performance.
        </p>
        <img
          src="financialAnalysisProject/closingPrice.png"
          alt="CLosing Price Time Series"
          className="my-4 w-3/4 h-auto mx-auto"
        />
        <p className="text-lg text-black dark:text-white mb-4">
          In this analysis, linear regression models is applied to predict stock
          prices and profitability using various financial indicators. The
          regression model helps quantify the strength of the relationship
          between dependent variables (e.g., stock prices) and independent
          variables (e.g., revenue, profit margins).
        </p>
        <img
          src="financialAnalysisProject/predErrors.png"
          alt="Residual Errors"
          className="my-4 w-3/4 h-auto mx-auto"
        />
      </section>

      {/* Regression Analysis Insights Section */}
      <section className="my-8 p-6 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Key Insights
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">
              Total Revenue
            </strong>{" "}
            and{" "}
            <strong className="text-gray-800 dark:text-white">
              Operating Income
            </strong>{" "}
            showed strong positive correlations with stock performance.
          </li>
          <li className="text-lg">
            Companies with{" "}
            <strong className="text-gray-800 dark:text-white">
              higher Net Income
            </strong>{" "}
            tend to have lower stock price volatility, suggesting{" "}
            <strong className="text-gray-800 dark:text-white">
              financial stability
            </strong>{" "}
            and{" "}
            <strong className="text-gray-800 dark:text-white">
              lower risk
            </strong>
            .
          </li>
          <li className="text-lg">
            The{" "}
            <strong className="text-gray-800 dark:text-white">
              R-squared values
            </strong>{" "}
            indicated that a significant portion of stock price variance could
            be explained by these financial metrics.
          </li>
        </ul>
        <p className="text-lg mt-6 text-gray-700 dark:text-gray-300">
          The regression analysis provided valuable insights into how core
          financial metrics can predict{" "}
          <strong className="text-gray-800 dark:text-white">
            stock performance
          </strong>
          , guiding more informed investment strategies.
        </p>
      </section>

      {/* Combined Analysis Section */}
      <section id="combined-analysis" className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Combined Analysis
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          The combined analysis integrates the insights from clustering,
          regression, and correlation studies to present a holistic view of
          financial health. By combining these techniques, we aim to identify
          patterns in financial data that contribute to company performance,
          risk, and resilience.
        </p>
        <p className="text-lg text-black dark:text-white mb-4">
          This approach allowed us to examine how clusters of companies, based
          on their financial health, are related to their stock price trends and
          future performance predictions. The insights from regression analysis
          were mapped onto the clusters, further strengthening our
          understanding.
        </p>
        <img
          src="financialAnalysisProject/ClusterAnalysis.png"
          alt="Combined Analysis with Regression Model for each Cluster"
          className="my-4 w-3/4 h-auto mx-auto"
        />
      </section>

      {/* Combined Analysis Insights Section */}
      <section className="my-8 p-6 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Key Insights
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">
              Clusters of high-revenue companies
            </strong>
            , such as{" "}
            <strong className="text-gray-800 dark:text-white">Cluster 2</strong>
            , demonstrated consistent stock price growth, as confirmed by the
            regression analysis.
          </li>
          <li className="text-lg">
            Companies with{" "}
            <strong className="text-gray-800 dark:text-white">
              balanced financial metrics
            </strong>{" "}
            in{" "}
            <strong className="text-gray-800 dark:text-white">Cluster 0</strong>{" "}
            were found to have stable growth and{" "}
            <strong className="text-gray-800 dark:text-white">
              lower risk
            </strong>
            , aligning with regression results.
          </li>
          <li className="text-lg">
            The integration of{" "}
            <strong className="text-gray-800 dark:text-white">
              clustering and regression techniques
            </strong>{" "}
            provided a deeper understanding of financial performance drivers
            across different company groups.
          </li>
        </ul>
        <p className="text-lg mt-6 text-gray-700 dark:text-gray-300">
          The combined analysis offered{" "}
          <strong className="text-gray-800 dark:text-white">
            comprehensive insights
          </strong>{" "}
          into the financial health of companies, linking{" "}
          <strong className="text-gray-800 dark:text-white">
            financial clusters
          </strong>{" "}
          to{" "}
          <strong className="text-gray-800 dark:text-white">
            stock price growth
          </strong>{" "}
          and resilience.
        </p>
      </section>

      {/* Resilience Analysis Section */}
      <section id="resilience-analysis" className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Resilience Analysis
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          Resilience analysis focuses on identifying companies that are better
          equipped to withstand financial downturns and market volatility. By
          examining key metrics such as debt ratios, liquidity, and
          profitability, we can assess how well companies are positioned to
          manage financial stress.
        </p>
        <img
          src="financialAnalysisProject/ResilienceAnalysis.png"
          alt="Resillience Analysis"
          className="my-4 w-3/4 h-auto mx-auto"
        />
        <p className="text-lg text-black dark:text-white mb-4">
          In this analysis, we evaluated the resilience of companies within each
          cluster by analyzing their financial flexibility, operational
          efficiency, and revenue stability. This provides insights into which
          companies are likely to maintain financial stability even during
          economic downturns.
        </p>
        <img
          src="financialAnalysisProject/comparison.png"
          alt="Resillience Analysis Comparison AAPL vs MSFT"
          className="my-4 w-3/4 h-auto mx-auto"
        />
      </section>

      {/* Resilience Analysis Insights Section */}
      <section className="my-8 p-6 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Key Insights
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">
              Cluster 0 companies
            </strong>{" "}
            demonstrated{" "}
            <strong className="text-gray-800 dark:text-white">
              strong financial resilience
            </strong>{" "}
            due to high liquidity and low debt ratios, making them less
            vulnerable to market shocks.
          </li>
          <li className="text-lg">
            <strong className="text-gray-800 dark:text-white">
              Cluster 2 companies
            </strong>
            , despite high revenues, exhibited{" "}
            <strong className="text-gray-800 dark:text-white">
              higher liabilities
            </strong>
            , suggesting potential financial vulnerability during market stress.
          </li>
          <li className="text-lg">
            The resilience analysis highlighted the importance of{" "}
            <strong className="text-gray-800 dark:text-white">
              healthy liquidity
            </strong>{" "}
            and{" "}
            <strong className="text-gray-800 dark:text-white">low debt</strong>{" "}
            for long-term financial stability.
          </li>
        </ul>
        <p className="text-lg mt-6 text-gray-700 dark:text-gray-300">
          The resilience analysis emphasized the need for companies to maintain{" "}
          <strong className="text-gray-800 dark:text-white">
            strong liquidity
          </strong>{" "}
          and manage debt levels to ensure{" "}
          <strong className="text-gray-800 dark:text-white">
            long-term financial stability
          </strong>{" "}
          in a volatile market environment.
        </p>
      </section>

      {/* Conclusion & Recommendations Section */}
      <section id="conclusion-recommendations" className="my-8">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Conclusion & Recommendations
        </h2>
        <p className="text-lg text-black dark:text-white">
          The clustering, regression, and resilience analyses provided valuable
          insights into the financial health and performance of companies. By
          grouping companies based on financial metrics, we were able to
          identify patterns of profitability, risk, and resilience, which serve
          as a powerful tool for investors and financial analysts.
        </p>
        <p className="text-lg mt-4 text-black dark:text-white">
          The combination of clustering and regression analysis showed that
          companies with high revenues and strong financial metrics consistently
          performed well in terms of stock price growth, while those with higher
          liabilities or lower net income presented higher financial risks. The
          resilience analysis further highlighted the importance of liquidity
          and debt management, offering essential guidance for long-term
          financial planning.
        </p>
        <p className="text-lg mt-4 text-black dark:text-white">
          Based on these findings, it is recommended that:
          <ul className="list-disc list-inside space-y-4 mt-4 text-black dark:text-white">
            <li>
              Investors prioritize companies with{" "}
              <strong>balanced financial metrics</strong> and strong liquidity
              as they are better positioned to endure market volatility.
            </li>
            <li>
              Risk management strategies should focus on identifying companies
              with <strong>high liabilities</strong> or volatile earnings to
              mitigate exposure to potential financial downturns.
            </li>
            <li>
              A more thorough analysis of the long-term debt and liquidity of
              high-revenue companies is necessary to understand their potential
              vulnerabilities during economic stress.
            </li>
          </ul>
        </p>
      </section>

      {/* Research Questions Section */}
      <section
        id="answers-to-research-questions"
        className="my-8 p-6 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Answers to Research Questions
        </h3>
        <ul className="list-disc list-inside space-y-4 text-black dark:text-white">
          <li className="text-lg">
            <strong>
              What financial metrics can be used to accurately assess a
              company's financial health and predict its future performance?
            </strong>
            <br />
            The analysis revealed that{" "}
            <strong>Total Revenue, Operating Income, and Net Income</strong> are
            among the most critical financial metrics for predicting stock
            performance and assessing financial health.
          </li>

          <li className="text-lg">
            <strong>
              How can companies be grouped based on their financial profiles,
              and what are the characteristics of each group?
            </strong>
            <br />
            Companies were effectively grouped into distinct clusters based on
            their financial metrics using K-Means clustering.{" "}
            <strong>Cluster 0</strong> consisted of companies with balanced
            financial profiles and stable growth, while{" "}
            <strong>Cluster 2</strong> was characterized by high-revenue
            companies such as AAPL, MSFT, and XOM.
          </li>

          <li className="text-lg">
            <strong>
              Which financial factors most strongly contribute to a company
              being classified as high-risk or low-risk?
            </strong>
            <br />
            Companies with{" "}
            <strong>higher liabilities and lower liquidity</strong> were
            classified as high-risk, while those with stable revenues, strong
            liquidity, and lower debt were considered low-risk.
          </li>

          <li className="text-lg">
            <strong>
              How can clustering techniques help in identifying patterns of
              profitability, risk, and resilience among companies?
            </strong>
            <br />
            Clustering techniques allowed us to identify distinct patterns among
            companies. Highly profitable companies were grouped together, while
            companies with higher liabilities were identified as higher risk.
          </li>
        </ul>
      </section>

      {/* Conclusion Section Continued */}
      <section className="my-8">
        <p className="text-lg mt-6 text-black dark:text-white">
          In conclusion, the combined analysis has provided key insights into
          the financial performance, risk, and resilience of companies. These
          insights can help investors make more informed decisions and improve
          financial risk management strategies, ensuring sustainable long-term
          growth and profitability.
        </p>
      </section>
    </div>
  );
};

export default FinancialAnalysisPage;
