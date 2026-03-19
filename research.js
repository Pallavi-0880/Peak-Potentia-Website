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

    filteredPapers.forEach(paper => {
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
