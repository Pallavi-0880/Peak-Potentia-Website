const papers = [
    {
        icon: './pdfImage/image (41).png',
        category: 'Cinema Studies',
        title: 'How Does Mobile Banking Contribute to Financial Inclusion in Emerging Economies?',
        author: 'Research Paper By Aamanya Shah',
        file: '../pdf/Research-Paper-By-Aamanya-Shah.pdf'
    },
    {
        icon: './pdfImage/image (2).png',
        category: 'Economics',
        title: 'Overview of Demographic Shifts and Aging Populations',
        author: 'Research Paper By Aditya Agarwal',
        file: '../pdf/Research-Paper-By-Aditya-Agarwal.pdf'
    },
    {
        icon: './pdfImage/image (3).png',
        category: 'Finance',
        title: 'The Impact of Growth in Housing Loan Disbursements with Improvement of India HDI Scores across 2012-2022',
        author: 'Research Paper By Aizah Arora',
        file: '../pdf/Research-Paper-By-Aizah-Arora.pdf'
    },
    {
        icon: './pdfImage/image (4).png',
        category: 'Behavioral Economics',
        title: 'What role do externalities play in the housing market, particularly in urban areas experiencing rapid growth or decline?',
        author: 'Research Paper By Aryaveer Dhillon',
        file: '../pdf/Research-Paper-By-Aryaveer-Dhillon.pdf'
    },
    {
        icon: './pdfImage/image (5).png',
        category: 'Environmental Science',
        title: 'What policies can governments implement to reduce wealth disparities?',
        author: 'Research Paper By Kashish Jain',
        file: '../pdf/Research-Paper-By-Kashish-Jain.pdf'
    },
    {
        icon: './pdfImage/image (6).png',
        category: 'Technology',
        title: 'How do variations in the Human Development Index (HDI) among BRICS countries correlate with differences in agricultural policies and farmer welfare?',
        author: 'Research Paper By Palak Samani',
        file: '../pdf/Research-Paper-By-Palak-Samani.pdf'
    },
    {
        icon: './pdfImage/image (7).png',
        category: 'Education',
        title: 'How do current trends in residential and commercial real estate prices in Mumbai compare to those in New York City, and what economic, social, and regulatory factors are influencing these trends in both metropolitan areas?',
        author: 'Research Paper By Rajvir Sehgal',
        file: '../pdf/Research-Paper-By-Rajvir-Sehgal.pdf'
    },
    {
        icon: '⚖️',
        category: 'Social Justice',
        title: 'In what ways have gender representations in Indian classical and folk dance forms evolved, and how do contemporary dancers negotiate gender identity through their performances?',
        author: 'Research Paper By Sairaah Luther',
        file: 'paper8.pdf'
    },
    {
        icon: './pdfImage/image (8).png',
        category: 'Economics',
        title: 'To what extent have financial inclusion policies benefited small-scale entrepreneurs and fostered local economic development?',
        author: 'Research Paper By Tvisha Gupta',
        file: '../pdf/Research-Paper-By-Tvisha-Gupta.pdf'
    },
    {
        icon: './pdfImage/image (9).png',
        category: 'Economics',
        title: 'How have India’s economic policies influenced its current unemployment situation, particularly in terms of skill development and workforce readiness?',
        author: 'Research paper by Virika Juneja',
        file: '../pdf/Research-Paper-By-Virika-Juneja.pdf'
    },
    {
        icon: './pdfImage/image (10).png',
        category: 'Economics',
        title: 'How do different types of government policies (e.g., fiscal,monetary) affect economic growth rates?',
        author: 'Research paper by Aarav Baid',
        file: '../pdf/Aarav-Baid-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (11).png',
        category: 'Economics',
        title: 'How does price sensitivity vary among consumers in subscription services compared to traditional pay-per-product services?',
        author: 'Research Paper By Aarav Himatsinghania',
        file: '../pdf/Aarav-Himatsinghania-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (12).png',
        category: 'Economics',
        title: 'In what ways are technological advancements, such as blockchain, transforming international trade and finance operations?',
        author: 'Research Paper By Aarav Saraf',
        file: '../pdf/Aarav-Saraf-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (13).png',
        category: 'Economics',
        title: 'Investigate the strategies that emergent economies are employing tovaddress the escalating prices that have resulted from global supply chain disruptions and central bank interventions.',
        author: 'Research Paper By Aarna Kapoor',
        file: '../pdf/Aarna-Kapoor-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (14).png',
        category: 'Economics',
        title: 'How do smart logistics solutions facilitate the flow of trade in MENA countries, and what impact do they have on global supply chain efficiency?" Case study with DP world',
        author: 'Research Paper By Vihaan Poddar',
        file: '../pdf/Research-Paper-Vihaan-Poddar.pdf'
    },
    {
        icon: './pdfImage/image (15).png',
        category: 'Economics',
        title: 'How effective is microfinance in reducing poverty in rural areas compared to urban settings?',
        author: 'Research Paper By Ahana Kotibhaskar',
        file: '../pdf/Ahana-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (16).png',
        category: 'Economics',
        title: 'How has Russia demonstrated economic resilience in response to Western sanctions, and what role have BRICS cooperation, domestic market adaptation, and sectoral strategies played in mitigating their impact? ',
        author: 'Research Paper By Alex Kutsik',
        file: '../pdf/Alex-Kutsik-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (17).png',
        category: 'Economics',
        title: 'To what extent do ambiguous regulations and rules impede the economic benefits derived from adventure sports activities in small regional economies?',
        author: 'Research paper by Angad Brar',
        file: '../pdf/Angad-Brar-Research-Paper.pdf'
    },
    {
        icon: './pdfImage/image (18).png',
        category: 'Economics',
        title: 'ASTUDYON SOCIALMOBILITYIN INDIAWITH FOCUS ON THE QSR INDUSTRY.',
        author: 'Research Paper By Anindita Pandyan',
        file: '../pdf/Anindita-Pandyan-Published-Paper.pdf'
    },
    {
        icon: './pdfImage/image (19).png',
        category: 'Economics',
        title: 'How do carbon taxes influence the behaviour of industries with high carbon emissions, and what are the broader economic impacts of such taxes?',
        author: 'Research Paper By Arshia Dhingra',
        file: '../ppdf/Arshia-Dhingra-Research-Paper_67f8b6ca2d70b.pdf'
    },
    {
        icon: './pdfImage/image (20).png',
        category: 'Economics',
        title: 'What role does big data play in shaping investment strategies and portfolio management in the financial industry?',
        author: 'Research Paper By Audarya Gupta',
        file: '../pdf/Audarya-Gupta-Research-Paper_67f8c861b87a5.pdf'
    },
    {
        icon: './pdfImage/image (21).png',
        category: 'Economics',
        title: 'How does digital marketing influence consumer purchasing decisions?',
        author: 'Research Paper By Avisha Saraf',
        file: '../pdf/Avisha-Saraf-Research-paper_67f8cd20e3421.pdf'
    },
    {
        icon: './pdfImage/image (22).png',
        category: 'Economics',
        title: 'What is the correlation between disposable income growth in urban and rural areas and the increase in SIP investments?',
        author: 'Research Paper By Dhruv Doshi',
        file: '../pdf/Dhruv-Doshi-Research-Paper_67f8ce15ecf81.pdf'
    },
    {
        icon: './pdfImage/image (23).png',
        category: 'Economics',
        title: 'How have recent economic policies (e.g., GST, demonetization, Make in India) impacted investment portfolios in India?',
        author: 'Research Paper By Anvi Singh',
        file: '../pdf/Economic-Research-Paper-of-Anvi-Singh_67f8cf2419e0c.pdf'
    },
    {
        icon: './pdfImage/image (2).png',
        category: 'Economics',
        title: 'Explore the emergence of banking and financial institutions in ancient Greece, focusing on their role in economic development and commerce.',
        author: 'Research Paper By Viraj Nath',
        file: '../pdf/Economic-Research-Paper-Viraj-Nath_67f8cff4a0866.pdf'
    },
    {
        icon: './pdfImage/image (24).png',
        category: 'Economics',
        title: 'Mechanisms of Resistance to Monoclonal Antibody Therapies in Cancer: Molecular, Cellular, and Tumor Microenvironment Factors Contributing to Therapeutic Evasion',
        author: 'Research Paper By Fia Inamdar',
        file: '../pdf/Fia-Inamdar-Research-Paper_67f8d095ef13d.pdf'
    },
    {
        icon: './pdfImage/image (25).png',
        category: 'Economics',
        title: 'A research paper on Systematic Investment plan',
        author: 'Research Paper By Yash Somani',
        file: '../pdf/Internship-Report-Yash-Somani_67f8d18c478e6.pdf'
    },
    {
        icon: './pdfImage/image (26).png',
        category: 'Economics',
        title: 'How do sponsorship and endorsement deals impact the revenue streams and brand equity of soccer clubs and players, and what are the key success factors in maximizing their value?',
        author: 'Research Paper By Jeet Mukherjea',
        file: '../pdf/Jeet-Mukherjea-research-paper_67ff88f5d9689.pdf'
    },
    {
        icon: './pdfImage/image (27).png',
        category: 'Economics',
        title: 'How do interest rate changes influence capital structure decisions among SMEs in  the technology sector in the Indian economy?',
        author: 'Research Paper By Krrish Somani',
        file: '../pdf/Krrish-Somani-Research-Paper_67ff89e550d71.pdf'
    },
    {
        icon: './pdfImage/image (28).png',
        category: 'Economics',
        title: 'How do minimum wage laws impact employment levels in different  industries?',
        author: 'Research Paper By Meenakshi Modi',
        file: '../pdf/Meenakshi-Modi-Research-paper_67ff8abfe50b1.pdf'
    },
    {
        icon: './pdfImage/image (29).png',
        category: 'Economics',
        title: 'What role do art galleries and auction houses play in determining the value of Indian art today?',
        author: 'Research Paper By Nandini Jain',
        file: '../pdf/Nandini-Jain-Reseach-Paper_67ff8bf706f41.pdf'
    },
    {
        icon: './pdfImage/image (30).png',
        category: 'Economics',
        title: 'What is the political impact of monetary policy transparency and central bank  independence?',
        author: 'Research Paper By  Neil jamb',
        file: '../pdf/Neil-Jamb-Research-paper_67ff8d948ee80.pdf'
    },
    {
        icon: './pdfImage/image (31).png',
        category: 'Economics',
        title: 'How does FDI affect the development of the host country?',
        author: 'Research Paper By Piyush Gupta',
        file: '../pdf/Piyush-Gupta-Research-Paper-_6821db33ec78b.pdf'
    },
    {
        icon: './pdfImage/image (32).png',
        category: 'Economics',
        title: 'What constitutional challenges have been raised against electoral bonds, and what are the potential legal outcomes?',
        author: 'Research Paper By Prisha Singhal',
        file: '../pdf/Prisha-Singhal-Reseach-Paper-1-_6821de8134fb6.pdf'
    },
    {
        icon: './pdfImage/image (33).png',
        category: 'Economics',
        title: 'What role do small repeated behavioural cues play in forming long term  habits?',
        author: 'Research Paper By Paree Soni',
        file: '../pdf/Psychology-Research-Paper-by-Paree-Soni-_6821e0b1d315f.pdf'
    },
    {
        icon: './pdfImage/image (34).png',
        category: 'Economics',
        title: 'OHow Can Stubble Burning in Punjab be transformed into an opportunity for generating green fuel, Fostering employment, increasing rural income, and driving economic growth in India?',
        author: 'Research Paper By Reianna Vallabh',
        file: '../pdf/Reianna-Vallabh-Research-Paper-2_6821e122b8c8b.pdf'
    },
    {
        icon: './pdfImage/image (35).png',
        category: 'Economics',
        title: 'How does the implementation of European football clubs financial models and developmental leagues in India, influence our global competitiveness and fan engagement  of Indian football clubs ?',
        author: 'Research Paper By Abhinav Vasudevan',
        file: '../pdf/Reseach-Paper-Abhinav-Vasudevan_6821e25ea7fcb.pdf'
    },
    {
        icon: './pdfImage/image (36).png',
        category: 'Economics',
        title: 'How effective is microfinance in reducing poverty in rural areas compared to urban settings?',
        author: 'Research Paper By Ahanna Kotibhaskar',
        file: '../pdf/Research-Papeby-Ahanna-Kotibhaskar_6821e34576e02.pdf'
    },
    {
        icon: './pdfImage/image (37).png',
        category: 'Economics',
        title: 'Explore how emerging economies are tackling inflation in the wake of global supply chain issues and central bank interventions.',
        author: 'Research Paper By Aarna Kapoor',
        file: '../pdf/Research-Paper-Aarna-Kapoor_6821e3d3e16d2.pdf'
    },
    {
        icon: './pdfImage/image (38).png',
        category: 'Economics',
        title: 'What are the economic impacts of minimum wage laws on  employment and business profitability?',
        author: 'Research Paper By Ishika Punjabi',
        file: '../pdf/Research-Paper-Ishika-Punjabi-_6821e4902aeb9.pdf'
    },
    {
        icon: './pdfImage/image (39).png',
        category: 'Economics',
        title: 'What are the determinants of income inequality within and between  countries? ',
        author: 'Research Paper By Adrija Dutta',
        file: '../pdf/Research-Paper-Adrija-Dutta_6821e50b5ec14.pdf'
    },
    {
        icon: './pdfImage/image (40).png',
        category: 'Economics',
        title: 'What are the effects of long-term exposure to artificial intelligence (AI) interactions on emotional intelligence and empathy in humans?  ',
        author: 'Research Paper By Aryana Bhadauria',
        file: '../pdf/Research-Paper-Aryana-Bhadauria_6821e62204082.pdf'
    },
    {
        icon: './pdfImage/image (43).png',
        category: 'Economics',
        title: 'What impact have government incentives for startups had on employment and  innovation in India?  ',
        author: 'Research Paper By Krrish Somani',
        file: '../pdf/Research-Paper-Krishh-Somani._6822edda0f7aa.pdf'
    },
    {
        icon: './pdfImage/image (44).png',
        category: 'Economics',
        title: 'What strategies can businesses adopt to remain competitive in an increasingly  digital economy?  ',
        author: 'Research Paper By Naisha Sahney',
        file: '../pdf/Research-Paper-Naisha-Sahney._6822ee7d34f35.pdf'
    },
    {
        icon: './pdfImage/image (48).png',
        category: 'Economics',
        title: 'What are the determinants of income inequality within and between  countries?   ',
        author: ' Research Paper By Adrija Dutta',
        file: '../pdf/Research-Paper-Adrija-Dutta_6821e50b5ec14 (1).pdf'
    },
    {
        icon: './pdfImage/image (49).png',
        category: 'Economics',
        title: 'How Do Government Policies Affect Innovation and Technological Adoption in Small and Medium Enterprises  (SMEs)?    ',
        author: '  Research Paper By Avinash Balakrishnan',
        file: '../pdf/Research-Paper-By-Avinash-Balakrishnan_6821e9cfcce86.pdf'
    },
    {
        icon: './pdfImage/image (50).png',
        category: 'Economics',
        title: 'The Influence of Seasonal Trends on E-commerce Sales- An  Econometric Analysis  ',
        author: ' Research Paper By Nikhil Pande',
        file: '../pdf/Research-Paper-Nikhil-Pande_6822ef16bad19.pdf'
    },
    {
        icon: './pdfImage/image (51).png',
        category: 'Economics',
        title: 'How do behavioural biases influence asset pricing and the efficiency  of financial markets?   ',
        author: ' Research Paper By Paridhi Kumar',
        file: '../pdf/Research-Paper-Paridhi-Kumar_6822efb81cebb.pdf'
    },
    {
        icon: './pdfImage/image (53).png',
        category: 'Economics',
        title: 'Assessing the role of SUMUL in furthering Human Development in Surat and Tapi',
        author: ' Research Paper By Aadya Jain',
        file: '../pdf/Research Paper By Aadya Jain (1) (3).pdf'
    },
    {
        icon: './pdfImage/image (54).png',
        category: 'Economics',
        title: 'What is the estimated economic cost of menopause-related productivity loss in the female workforce, and how does it vary across industries?',
        author: ' Research Paper By Aadya Shakti Aggarwal',
        file: '../pdf/Research Paper By Aadya Shakti Aggarwal.pdf'
    },
    {
        icon: './pdfImage/image (55).png',
        category: 'Economics',
        title: 'What is the impact of protectionist trade policies on innovation and productivity growth? ',
        author: ' Research Paper By Aamalia Khandelwal',
        file: '../pdf/Research Paper By Aamalia Khandelwal.pdf'
    },
    {
        icon: './pdfImage/image (56).png',
        category: 'Economics',
        title: 'To What Extent Does Portfolio Diversification Reduce Systemic Risk During Global Financial Crises?',
        author: ' Research Paper By Aaminah Patel',
        file: '../pdf/Research Paper By Aaminah Patel (1).pdf'
    },
    {
        icon: './pdfImage/image (57).png',
        category: 'Economics',
        title: 'Rational Choices, Irrational Outcomes: Individually Optimal Decisions and Systemic Fragility in the 2008 Financial Crisis ?',
        author: ' Research Paper By Aanya Bayana',
        file: '../pdf/Research Paper By Aanya Bayana (1).pdf'
    },
    {
        icon: './pdfImage/image (58).png',
        category: 'Economics',
        title: 'What are the barriers that limit the utilization of central and state government schemes among rural women entrepreneurs in Telangana, and how do these barriers differ by education, caste, or income level ?',
        author: ' Research Paper By Aanya Gouravaram',
        file: '../pdf/Research Paper By Aanya Gouravaram (4).pdf'
    },
    {
        icon: './pdfImage/image (59).png',
        category: 'Economics',
        title: 'How do default options and interface design impact consumer choices on financial apps and investment platforms?',
        author: ' Research Paper By Aanya Rajgarhia',
        file: '../pdf/Research Paper By Aanya Rajgarhia.pdf'
    },
    {
        icon: './pdfImage/image (60).png',
        category: 'Economics',
        title: 'How did Cold War geopolitical alignment affect the economic growth trajectories of non-aligned countries?',
        author: ' Research Paper By Aarav Goyal',
        file: '../pdf/Research Paper By Aarav Goyal (1).pdf'
    },
    {
        icon: './pdfImage/image (61).png',
        category: 'Economics',
        title: 'To what extent does the market concentration of large asset managers (e.g., BlackRock, Vanguard) pose systemic risks to global financial markets?',
        author: ' Research Paper By Aarav Jhaveri',
        file: '../pdf/Research Paper By Aarav Jhaveri (1).pdf'
    },
    {
        icon: './pdfImage/image (62).png',
        category: 'Economics',
        title: 'How do price changes affect household consumption patterns across income groups in India?',
        author: ' Research Paper By Aarush Kapur',
        file: '../pdf/Research Paper By Aarush Kapur.pdf'
    },
    {
        icon: './pdfImage/image (63).png',
        category: 'Economics',
        title: 'How effective are carbon pricing mechanisms (carbon taxes vs.cap-and-trade) in reducing CO2 emissions across OECD countries?',
        author: ' Research Paper By Aayan Chopra',
        file: '../pdf/Research Paper By Aayan Chopra (1).pdf'
    },
    {
        icon: './pdfImage/image (64).png',
        category: 'Economics',
        title: 'To what extent does the World Trade Organization still serve the interests of developing economies?',
        author: ' Research Paper By Adarsh Prusti',
        file: '../pdf/Research Paper By Adarsh Prusti (1).pdf'
    },
    {
        icon: './pdfImage/image (65).png',
        category: 'Economics',
        title: 'What Role Does Manufacturing-Led Industrialization Play in Reducing Regional Development Disparities within Karnataka?',
        author: ' Research Paper By Aditri Shetty',
        file: '../pdf/Research Paper By Aditri Shetty (1).pdf'
    },
    {
        icon: './pdfImage/image (66).png',
        category: 'Economics',
        title: 'How do alternative stock return measurement approaches differ in reflecting actual investor performance over time, and how might mismeasurement influence investor decision-making?',
        author: ' Research Paper By Agastya Kapur',
        file: '../pdf/Research Paper By Agastya Kapur.pdf'
    },
    {
        icon: './pdfImage/image (67).png',
        category: 'Economics',
        title: 'How effective is federated learning at handling real-world data differences compared to centralized AI training?',
        author: ' Research Paper By Ahaan Gupta',
        file: '../pdf/Research Paper By Ahaan Gupta (1).pdf'
    },
    {
        icon: './pdfImage/image (68).png',
        category: 'Economics',
        title: 'How do inflation-control strategies from the 1970s oil shock compare with central bank responses to post-pandemic inflation in the 2020s?',
        author: ' Research Paper By Aisshaaria Gupta',
        file: '../pdf/Research Paper By Aisshaaria Gupta (1).pdf'
    },
    {
        icon: './pdfImage/image (69).png',
        category: 'Economics',
        title: 'The Rise of Passive Investing: Its Long-Term Impact on Market Efficiency and Corporate Governance?',
        author: ' Research Paper By Akshat Maheshwari',
        file: '../pdf/Research Paper By Akshat Maheshwari (1).pdf'
    },
    {
        icon: './pdfImage/image (70).png',
        category: 'Economics',
        title: 'Does hosting a mega-event like the Olympics or FIFAWorld Cup significantly alter the trajectory of a country’s revenue trends when controlled for regional and global economic factors?',
        author: ' Research Paper By Amishi Sureka',
        file: '../pdf/Research Paper By Amishi Sureka. (1).pdf'
    },
    {
        icon: './pdfImage/image (71).png',
        category: 'Economics',
        title: 'To what extent do supply chain inefficiencies affect the quality,shelf life, and market competitiveness of agricultural produce in Punjab, and what role can cold storage and logistics infrastructure play in addressing these challenges?',
        author: ' Research Paper By Amrit Jolly',
        file: '../pdf/Research Paper By Amrit Jolly.pdf'
    },
    {
        icon: './pdfImage/image (72).png',
        category: 'Economics',
        title: 'How do foreign direct investments (FDIs) contribute to sustainable economic growth in developing economies?',
        author: ' Research Paper By Ananya Dhull',
        file: '../pdf/Research Paper By Ananya Dhull (1).pdf'
    },
    {
        icon: './pdfImage/image (73).png',
        category: 'Economics',
        title: 'To what extent do ambiguous regulations and rules impede the economic benefits derived from adventure sports activities in small regional economies?',
        author: 'Research Paper By Angad Brar',
        file: '../pdf/Research paper by Angad Brar(4).pdf'
    },
    {
        icon: './pdfImage/image (74).png',
        category: 'Economics',
        title: 'How Have Central Bank Interest Rate Policies After COVID-19 Affected Stock Market Volatility in Emerging and Developed Economies?',
        author: 'Research Paper By Araash Bhargava',
        file: '../pdf/Research Paper By Araash Bhargava.pdf'
    },
    {
        icon: './pdfImage/image (75).png',
        category: 'Economics',
        title: 'How do multinational firms balance marketing localization with financial efficiency when entering emerging markets?',
        author: 'Research Paper By Aradhyaa Jain',
        file: '../pdf/Research Paper By Aradhyaa Jain.pdf'
    },
    {
        icon: './pdfImage/image (76).png',
        category: 'Economics',
        title: 'Fixing the Fiscal in France: The Cause and Consequences of Reforms in Fiscal Policies and Taxation (1789-1814)',
        author: 'Research Paper By Arav Talwar',
        file: '../pdf/Research Paper By Arav Talwar (1).pdf'
    },
    {
        icon: './pdfImage/image (77).png',
        category: 'Economics',
        title: 'What economic policies were most influential in shaping the voting decisions of first-time voters in Saharanpur?',
        author: 'Research Paper By Arish Talwar',
        file: '../pdf/Research Paper By Arish Talwar.pdf'
    },
    {
        icon: './pdfImage/image (78).png',
        category: 'Economics',
        title: 'What is the long-term effect of inflation targeting on GDP growth in emerging economies?',
        author: 'Research Paper By Arnav Agarwal',
        file: '../pdf/Research Paper By Arnav Agarwal.pdf'
    },
    {
        icon: './pdfImage/image (79).png',
        category: 'Economics',
        title: 'How do ESG-focused investment strategies affect portfolio risk-return trade-offs compared to conventional asset allocation?',
        author: 'Research Paper By Arshia Dargan',
        file: '../pdf/Research Paper By Arshia Dargan..pdf'
    },
    {
        icon: './pdfImage/image (80).png',
        category: 'Economics',
        title: 'To what extent does the integration of offshoring strategies with efficient freight infrastructure and digital customs platforms shape export diversification and market access for developing nations?',
        author: 'Research Paper By Aryaveer Mago',
        file: '../pdf/Research Paper By Aryaveer Mago.pdf'
    },
    {
        icon: './pdfImage/image (81).png',
        category: 'Economics',
        title: 'How have disruptions in global grain supply (due to the Ukraine conflict)influenced food price inflation and food security in Sub-Saharan Africa and South Asia?',
        author: 'Research Paper By Avandeeta Dewan',
        file: '../pdf/Research Paper By Avandeeta Dewan.pdf'
    },
    {
        icon: './pdfImage/image (82).png',
        category: 'Economics',
        title: 'How do different types of nudges (e.g., defaults, incentives, social norms) impact decision-making in various contexts such as health, finance, and environmental sustainability?',
        author: 'Research Paper By Aveer Kumar',
        file: '../pdf/Research Paper By Aveer Kumar.pdf'
    },
    {
        icon: './pdfImage/image (83).png',
        category: 'Economics',
        title: 'How has Hindi cinema across decades reflected and shaped the shifting social choices on issues like feminism, environmentalism and nationalism?',
        author: 'Research Paper By Aveer Mahajan',
        file: '../pdf/Research Paper By Aveer Mahajan.pdf'
    },
    {
        icon: './pdfImage/image (84).png',
        category: 'Economics',
        title: 'How do macroeconomic indicators influence stock market returns in emerging economies?',
        author: 'Research Paper By Ayaan Shanker',
        file: '../pdf/Research Paper By Ayaan Shanker (3).pdf'
    },
    {
        icon: './pdfImage/image (85).png',
        category: 'Economics',
        title: 'How does the use of morphing wing technologies impact aerodynamic efficiency during various flight phases (takeoff, cruise, landing)?',
        author: 'Research Paper By Ayush Vohra',
        file: '../pdf/Research Paper By Ayush Vohra (2).pdf'
    },
    {
        icon: './pdfImage/image (86).png',
        category: 'Economics',
        title: 'How does cause-based marketing (e.g., supporting mental health or body positivity) affect consumer attachment to fitness brands?',
        author: 'Research Paper By Cherissa Bhanushali',
        file: '../pdf/Research Paper By Cherissa Bhanushali (1).pdf'
    },
    {
        icon: './pdfImage/image (87).png',
        category: 'Economics',
        title: 'How do Algorithmic trading strategies affect price discovery and volatility in emerging market equity markets?',
        author: 'Research Paper By Daksh Agrawal',
        file: '../pdf/Research Paper By Daksh Agrawal (2).pdf'
    },
    {
        icon: './pdfImage/image (88).png',
        category: 'Economics',
        title: 'The Impact of Healthcare Subsidies on Health Outcomes and Labor Productivity in Low-Income Populations',
        author: 'Research Paper By Devaditya Joshi',
        file: '../pdf/Research Paper By Devaditya Joshi.pdf'
    },
    {
        icon: './pdfImage/image (89).png',
        category: 'Economics',
        title: 'Optimizing Supply Chain Efficiency in Manufacturing Industries: A Case Study of Emami',
        author: 'Research Paper By Devarsh Goenka',
        file: '../pdf/Research Paper By Devarsh Goenka.pdf'
    },
    {
        icon: './pdfImage/image (90).png',
        category: 'Economics',
        title: 'How has digital banking reshaped consumer trust in financial institutions?',
        author: 'Research Paper By Dhanishita Kumar',
        file: '../pdf/Research Paper By Dhanishita Kumar (1).pdf'
    },
    {
        icon: './pdfImage/image (91).png',
        category: 'Economics',
        title: 'How do manufacturing firms evaluate the financial trade-offs of investing in automation and digital technologies?',
        author: 'Research Paper By Diya Bansal',
        file: '../pdf/Research Paper By Diya Bansal.pdf'
    },
    {
        icon: './pdfImage/image (92).png',
        category: 'Economics',
        title: 'To what extent do over-the-counter testosterone boosters and protein supplements influence hormonal balance, metabolic markers, and athletic performance in young athletes?',
        author: 'Research Paper By Diya Karthik',
        file: '../pdf/Research Paper By Diya Karthik (2).pdf'
    },
    {
        icon: './pdfImage/image (93).png',
        category: 'Economics',
        title: 'What is the economic viability of modular construction in high-density housing projects?',
        author: 'Research Paper By Hasan Onallah',
        file: '../pdf/Research Paper By Hasan Onallah 2nd.pdf'
    },
    {
        icon: './pdfImage/image (94).png',
        category: 'Economics',
        title: 'How do modular prefabricated structures made of sustainable materials (e.g., cross-laminated timber panels, 3D-printed recycled plastics) alter the stress distribution and structural stability of residential housing?',
        author: 'Research Paper By Hasan Onallah',
        file: '../pdf/Research Paper By Hasan Onallah.pdf'
    },
    {
        icon: './pdfImage/image (95).png',
        category: 'Economics',
        title: 'How does access to microfinance influence key growth indicators such as revenue generation, employment creation, and business sustainability among rural small enterprises in India?',
        author: 'Research Paper By Hersh Dugar',
        file: '../pdf/Research Paper By Hersh Dugar.pdf'
    },
    {
        icon: './pdfImage/image (96).png',
        category: 'Economics',
        title: 'How are quantum principles used in GPS systems and atomic clocks to achieve high precision?',
        author: 'Research Paper By Ishan Jain',
        file: '../pdf/Research Paper By Ishan Jain (1).pdf'
    },
    {
        icon: './pdfImage/image (97).png',
        category: 'Economics',
        title: 'To what extent do ESG (environmental, social, and governance) disclosures affect investor behavior in global financial markets?',
        author: 'Research Paper By Ishita Bharadia',
        file: '../pdf/Research Paper By Ishita Bharadia (1).pdf'
    },
    {
        icon: './pdfImage/image (98).png',
        category: 'Economics',
        title: 'Appreciation and Admonitions amongst Consumers towards AI Generated Content and Human Centric Marketing as Advertising Strategies: Finding a Middle Path?',
        author: 'Research Paper By Kahaan Juthani',
        file: '../pdf/Research Paper By Kahaan Juthani.pdf'
    },
    {
        icon: './pdfImage/image (99).png',
        category: 'Economics',
        title: 'How can mathematical modeling and economic theory be used to predict and manage the impact of generative AI on labor market dynamics in emerging economies?',
        author: 'Research Paper By Kaira Puri',
        file: '../pdf/Research Paper By Kaira Puri (1).pdf'
    },
    {
        icon: './pdfImage/image (100).png',
        category: 'Economics',
        title: 'How has the introduction of digital financial products (e.g., mobile wallets, robo-advisors, fintech investment apps) altered portfolio preferences and savings rates in emerging markets?',
        author: 'Research Paper By Krishang Garg',
        file: '..pdf/Research paper by Krishang Garg (1).pdf'
    },
    {
        icon: './pdfImage/image (101).png',
        category: 'Economics',
        title: 'What are the barriers to accessing veterinary healthcare among marginalized livestock farmers, and how do these impact herd health and household resilience?',
        author: 'Research Paper By Manori Labh',
        file: '../pdf/Research Paper by Manori Labh (2).pdf'
    },
    {
        icon: './pdfImage/image (102).png',
        category: 'Economics',
        title: 'How can branding and value-based marketing improve customer loyalty in B2B precision tool manufacturing firms?',
        author: 'Research Paper By Medhansh Singal',
        file: '../pdf/Research Paper By Medhansh Singal.pdf'
    },
    {
        icon: './pdfImage/image (103).png',
        category: 'Economics',
        title: 'What are the barriers to accessing veterinary healthcare among marginalized livestock farmers, and how do these impact herd health and household resilience?',
        author: 'Research Paper By Mrinal Labh',
        file: '../pdf/Research Paper by Mrinal Labh.pdf'
    },
    {
        icon: './pdfImage/image (104).png',
        category: 'Economics',
        title: 'How Are Geopolitical Tensions Affecting Global Stock Market Volatility',
        author: 'Research Paper By Naysa Singhal',
        file: '../pdf/Research Paper By Naysa Singhal (2).pdf'
    },
    {
        icon: './pdfImage/image (105).png',
        category: 'Economics',
        title: 'How can data science models evaluate the effectiveness of government subsidies or carbon tax policies on energy consumption patterns?',
        author: 'Research Paper By Neil Mehra',
        file: '../pdf/Research Paper By Neil Mehra (3).pdf'
    },
    {
        icon: './pdfImage/image (106).png',
        category: 'Economics',
        title: 'The Cost-Benefit Analysis and Life-Cycle Assessment of the Transition towards Electric Vehicles across State, Market and Civil Society',
        author: 'Research Paper By Niharika Dujodwala',
        file: '../pdf/Research Paper By Niharika Dujodwala.pdf'
    },
    {
        icon: './pdfImage/image (106).png',
        category: 'Economics',
        title: 'How does urban migration influence real estate demand and informal housing growth?',
        author: 'Research Paper By Nivaan Shah',
        file: '../pdf/Research Paper By Nivaan Shaah (1).pdf'
    },
    {
        icon: './pdfImage/image (108).png',
        category: 'Economics',
        title: 'How rapidly do stock prices adjust to firm-specific information such as earnings announcements or dividend declarations?',
        author: 'Research Paper By Paarth Sharma',
        file: '../pdf/Research Paper By Paarth Sharma.pdf'
    },
    {
        icon: './pdfImage/image (109).png',
        category: 'Economics',
        title: 'What are the cellular mechanisms through which hyaluronic acid-based treatments improve skin hydration and elasticity?',
        author: 'Research Paper By Parissa Luthra',
        file: '../pdf/Research Paper By Parissa Luthra1 (1).pdf'
    },
    {
        icon: './pdfImage/image (110).png',
        category: 'Economics',
        title: 'To what extent do AI-powered recommendation engines affect consumer brand switching behavior?',
        author: 'Research Paper By Parth Choudhary',
        file: '../pdf/Research Paper By Parth Choudhary.pdf'
    },
    {
        icon: './pdfImage/image (111).png',
        category: 'Economics',
        title: 'To what extent does digital education contribute to long-term human capital formation and economic development globally?',
        author: 'Research Paper By Parthvi Kandoi',
        file: '../pdf/Research Paper By Parthvi Kandoi (3).pdf'
    },
    {
        icon: './pdfImage/image (112).png',
        category: 'Economics',
        title: 'How has the adoption of UPI (Unified Payments Interface) driven growth in India’s retail trade volume?',
        author: 'Research Paper By Pranay Jain',
        file: '../pdf/Research Paper by Pranay Jain.pdf'
    },
    {
        icon: './pdfImage/image (113).png',
        category: 'Economics',
        title: 'How are fintech innovations like AI-based trading platforms and digital wallets reshaping consumer behaviour and traditional banking models?',
        author: 'Research Paper By Prisha Shah',
        file: '../pdf/Research Paper By Prisha Shah..pdf'
    },
    {
        icon: './pdfImage/image (114).png',
        category: 'Economics',
        title: 'How do the effluent treatment plant (ETP) practices of Agro Keventer compare with those of Amul in terms of environmental compliance, operational efficiency, and sustainability outcomes?',
        author: 'Research Paper By Rakshit Kapoor',
        file: '../pdf/Research Paper By Rakshit Kapoor 2.pdf'
    },
    {
        icon: './pdfImage/image (115).png',
        category: 'Economics',
        title: 'How has the need for ISI certification influenced the adoption of modern food processing technologies and automated quality checks in Indian factories?',
        author: 'Research Paper By Rakshit Kapoor',
        file: '../pdf/Research Paper By Rakshit Kapoor.pdf'
    },
    {
        icon: './pdfImage/image (116).png',
        category: 'Economics',
        title: 'Does AI adoption enhance productivity without proportionately increasing employment in the formal sector? A comparative study of the USA and India.',
        author: 'Research Paper By Ranvirr Pardasani',
        file: '../pdf/Research Paper By Ranvirr Pardasani (1).pdf'
    },
    {
        icon: './pdfImage/image (117).png',
        category: 'Economics',
        title: 'What is the economic impact of transitioning to renewable energy in emerging economies?',
        author: 'Research Paper By Ranyah Kapoor',
        file: '../pdf/Research Paper By Ranyah Kapoor..pdf'
    },
    {
        icon: './pdfImage/image (118).png',
        category: 'Economics',
        title: 'What ethical dilemmas arise when balancing equality of opportunity with meritocracy in educational and employment settings?',
        author: 'Research Paper By Reet Bhatia',
        file: '../pdf/Research Paper By Reet Bhatia (3).pdf'
    },
    {
        icon: './pdfImage/image (119).png',
        category: 'Economics',
        title: 'To what extent can drone-based 3D mapping improve efficiency in urban infrastructure planning and development?',
        author: 'Research Paper By Rihit Wadhwa',
        file: '../pdf/Research Paper By Rihit Wadhwa.pdf'
    },
    {
        icon: './pdfImage/image (120).png',
        category: 'Economics',
        title: 'How do state-level labor policies vary in their treatment and support of informal and gig workers in India?',
        author: 'Research Paper By Rishan Parekh',
        file: '../pdf/Research Paper By Rishan Parekh.pdf'
    },
    {
        icon: './pdfImage/image (121).png',
        category: 'Economics',
        title: 'What psychological factors influence gamers’ decisions to download third-party algorithms for video games?',
        author: 'Research Paper By Rohan Verma',
        file: '../pdf/Research Paper By Rohan Verma (1).pdf'
    },
    {
        icon: './pdfImage/image (122).png',
        category: 'Economics',
        title: 'What is the long-term impact of inflation targeting on GDP growth in emerging economies?',
        author: 'Research Paper By Rubi Ray',
        file: '../pdf/Research Paper By Rubi Ray (1).pdf'
    },
    {
        icon: './pdfImage/image (123).png',
        category: 'Economics',
        title: 'To what extent are consumers shifting from established luxury labels to emerging fashion brands, and what factors (price sensitivity, sustainability concerns, digital influence, or identity expression) are driving this transition?',
        author: 'Research Paper By Sagan Aggarwal',
        file: '../pdf/Research Paper By Sagan Aggarwal (1).pdf'
    },
    {
        icon: './pdfImage/image (124).png',
        category: 'Economics',
        title: 'In what ways do digital capitalism and influencer culture amplify neoliberal patriarchal dynamics by monetizing feminist expression and activism?',
        author: 'Research Paper By Samaira Charles',
        file: '../pdf/Research Paper By Samaira Charles.pdf'
    },
    {
        icon: './pdfImage/image (125).png',
        category: 'Economics',
        title: 'How Does Sentiment Analysis of Product Reviews Impact the Perceived Trust and Purchase Intention of Sustainable Beauty Products?',
        author: 'Research Paper By Sanah Sehgal',
        file: '../pdf/Research Paper By Sanah Sehgal.pdf'
    },
    {
        icon: './pdfImage/image (126).png',
        category: 'Economics',
        title: 'To What Extent Does AI-Driven Personalization Increase Brand Loyalty Among Digital Consumers?',
        author: 'Research Paper By Shaurya Prakash Roongta',
        file: '../pdf/Research Paper By Shaurya Prakash Roongta. (1) (1).pdf'
    },
    {
        icon: './pdfImage/image (127).png',
        category: 'Economics',
        title: 'What are the effects of influencer marketing on consumer trust and purchasing decisions in global e-commerce?',
        author: 'Research Paper By Shlok Sethia',
        file: '../pdf/Research Paper By Shlok Sethia(2).pdf'
    },
    {
        icon: './pdfImage/image (128).png',
        category: 'Economics',
        title: 'What is the role of the prefrontal cortex in mediating rational vs.emotional consumer choices?',
        author: 'Research Paper By Shreeya Rajgarhia',
        file: '../pdf/Research Paper By Shreeya Rajgarhia.pdf'
    },
    {
        icon: './pdfImage/image (129).png',
        category: 'Economics',
        title: 'How can integrating Charkha-based cottage industries into modern supply chains promote Gandhian self-sufficiency by generating labour-intensive rural employment, enhancing income stability, and empowering marginalized groups in India?',
        author: 'Research Paper By Sidhharth Pable',
        file: '../pdf/Research Paper By Sidhharth Pable (1).pdf'
    },
    {
        icon: './pdfImage/image (130).png',
        category: 'Economics',
        title: 'How do perceptions of Minimum Support Price (MSP) influence crop choices and risk behaviour among farmers in northern India?',
        author: 'Research Paper By Smera Manoj Thakkar',
        file: '../pdf/Research Paper By Smera Manoj Thakkar.pdf'
    },
    {
        icon: './pdfImage/image (131).png',
        category: 'Economics',
        title: 'To What Extent are National Education Policies Aligning with Global Sustainable Development Goal 4?',
        author: 'Research Paper By Swara Trivedi',
        file: '../pdf/Research paper by Swara Trivedi (3).pdf'
    },
    {
        icon: './pdfImage/image (132).png',
        category: 'Economics',
        title: 'How do government subsidies for clean energy affect household energy choices in low-income regions?',
        author: 'Research Paper By Terese Muhebwa',
        file: '../pdf/Research Paper By Terese Muhebwa (1).pdf'
    },
    {
        icon: './pdfImage/image (133).png',
        category: 'Economics',
        title: 'How resilient are financial markets to geopolitical shocks (e.g., Russia–Ukraine war, U.S.–China tensions) compared to past crises?',
        author: 'Research Paper By Udayveer Singh Tomar',
        file: '../pdf/Research Paper By Udayveer Singh Tomar.pdf'
    },
    {
        icon: './pdfImage/image (134).png',
        category: 'Economics',
        title: 'How Have Advancements in Machine Learning Impacted the Predictive Accuracy of Asset Pricing Models?',
        author: 'Research Paper By Veer Bhatia',
        file: '../pdf/Research Paper By Veer Bhatia (2).pdf'
    },
    {
        icon: './pdfImage/image (135).png',
        category: 'Economics',
        title: 'How has ESG investing reshaped portfolio performance and risk-return tradeoffs in the post-pandemic era?',
        author: 'Research Paper By Vibhav Sethu',
        file: '../pdf/Research Paper By Vibhav Sethu (1).pdf'
    },
    {
        icon: './pdfImage/image (136).png',
        category: 'Economics',
        title: 'To what extent does housing finance drive household wealth creation and intergenerational asset transfer?',
        author: 'Research Paper By Vikkraman Jatia',
        file: '../pdf/Research Paper By Vikkraman Jatia.pdf'
    },
    {
        icon: './pdfImage/image (137).png',
        category: 'Economics',
        title: 'Can blockchain-enabled tokenization of property ownership create more liquidity in real estate markets?',
        author: 'Research Paper By Viraj Jain',
        file: '../pdf/Research Paper By Viraj Jain (1).pdf'
    },
    {
        icon: './pdfImage/image (138).png',
        category: 'Economics',
        title: 'How have advancements in AI and machine learning transformed asset allocation and risk assessment strategies in portfolio management?',
        author: 'Research Paper By Vivaan Aneja',
        file: '../pdf/Research Paper By Vivaan Aneja..pdf'
    },
    {
        icon: './pdfImage/image (139).png',
        category: 'Economics',
        title: 'How can game-theoretic models explain optimal move selection in mid-game scenarios under uncertainty?',
        author: 'Research Paper By Vivaan Rana',
        file: '../pdf/Research Paper By Vivaan Rana.pdf'
    },
    {
        icon: './pdfImage/image (140).png',
        category: 'Economics',
        title: 'Can sustainability-driven innovation create competitive advantages that lead to superior financial performance?',
        author: 'Research Paper By Vivana Contractor',
        file: '../pdf/Research Paper By Vivana Contractor (2).pdf'
    },
    {
        icon: './pdfImage/image (141).png',
        category: 'Economics',
        title: 'Is a standardized global nutritional index an effective tool for measuring and addressing malnutrition across countries with diverse socio-economic and cultural contexts?',
        author: 'Research Paper By Yaj Pradeep Parameswaran',
        file: '../pdf/Research Paper By Yaj Pradeep Parameswaran.pdf'
    },
    {
        icon: './pdfImage/image (142).png',
        category: 'Economics',
        title: 'To what extent does pH variation influence the antimicrobial efficacy of natural preservatives (e.g., neem extract, rosemary oil) compared to synthetic preservatives (e.g., sodium benzoate, parabens)?',
        author: 'Research Paper By Yashasavini Arora',
        file: '../pdf/Research Paper By Yashasavini Arora (3).pdf'
    },
    {
        icon: './pdfImage/image (143).png',
        category: 'Economics',
        title: 'How do online real estate broker systems influence market efficiency, buyer behavior, and the role of traditional intermediaries in the housing sector, and what policy measures can enhance their effectiveness while ensuring transparency and consumer protection?',
        author: 'Research Paper By Yuavan Khubchandani',
        file: '../pdf/Research Paper By Yuavan Khubchandani.pdf'
    },
    {
        icon: './pdfImage/image (144).png',
        category: 'Economics',
        title: 'How has the affordability of Parsi Baugs influenced patterns of community living, cultural preservation, and socio-economic diversity within the Parsi population of Mumbai?',
        author: 'Research Paper By Zaha Irani',
        file: '../pdf/Research Paper By Zaha Irani (1).pdf'
    },
    {
        icon: './pdfImage/image (145).png',
        category: 'Economics',
        title: 'The Workings of a Co-operative Bank and its Role in Real Estate Finance & Development — A Case Study on Zoroastrian Bank',
        author: 'Research Paper By Zaha Irani',
        file: '../pdf/Research Paper By Zaha Irani 2.pdf'
    },
    {
        icon: './pdfImage/image (146).png',
        category: 'Economics',
        title: 'How Does Minimal or ‘Silent’ Branding in Luxury Fashion Influence Consumer Perceptions of Exclusivity, and What Are the Economic Effects of This Strategy on Brand Equity?',
        author: 'Research Paper By Zara Seth',
        file: '../pdf/Research Paper By Zara Seth (5).pdf'
    },
    {
        icon: './pdfImage/image (147).png',
        category: 'Economics',
        title: 'Understanding the operations of steam boilers and making recommendations for optimizing them towards sustainability measures & waste reduction.',
        author: 'Research Project By Avnee Gehlot',
        file: '../pdf/Research Project By Avnee Gehlot.pdf'
    },
            {
        icon: './pdfImage/image (149).png',
        category: 'Economics',
        title: 'Do sanitation subsidies crowd out intrinsic motivation for hygiene adoption, or do they act as behavioural catalysts?',
        author: 'Research Project By Ojal Bansal',
        file: '../pdf/Research Paper By Ojal Bansal (1).pdf'
    },
     {
        icon: './pdfImage/image (150).png',
        category: 'Economics',
        title: 'To what extent has the adoption of UPI transformed consumer payment preferences compared to traditional cash and card transactions in India?',
        author: 'Research Project By Vivaan Sehgal',
        file: '../pdf/Research Paper By Vivaan Sehgal.pdf'
    },
     {
        icon: './pdfImage/image (151).png',
        category: 'Economics',
        title: 'How has digital banking integration with e-commerce platforms influenced frequency and volume of online purchases?',
        author: 'Research Project By Aushnik Acharya',
        file: '../pdf/Research Paper By Aushnik Acharya.pdf'
    },
]

// ================================
// YE CODE TOUCH MAT KARO
// Automatically cards bana dega
// ================================
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();

    const filteredPapers = papers.filter(paper =>
        paper.title.toLowerCase().includes(searchValue) ||
        paper.author.toLowerCase().includes(searchValue) ||
        paper.category.toLowerCase().includes(searchValue)
    );

    loadPapers(filteredPapers);
});
function loadPapers(filteredPapers = papers) {
    const grid = document.getElementById('papersGrid');
    grid.innerHTML = "";

    filteredPapers.slice().reverse().forEach(paper => {
        const card = `
            <div class="paper-item">
                <div class="item-icon">
                   <img src='${paper.icon}'class="img-fluid" alt="">
                </div>
                <div class="item-details">
                   <h3 class="item-heading">${paper.title}</h3>
                    <p class="item-writer">${paper.author}</p>
                    <div class="btn-group">
                       <a href="pdfs/${paper.file}" target="_blank" class="btn btn-view">👁️ View</a>
                       
                    </div>
                </div>
            </div>


                `;

        grid.innerHTML += card;
    });
}
// Page load hote hi papers show karo
loadPapers();



