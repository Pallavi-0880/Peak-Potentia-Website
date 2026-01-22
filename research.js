const papers = [
    {
        icon: '../pdfImage/image (41).png',
        category: 'Cinema Studies',
        title: 'How Does Mobile Banking Contribute to Financial Inclusion in Emerging Economies?',
        author: 'Research Paper By Aamanya Shah',
        file: '../pdf/Research-Paper-By-Aamanya-Shah.pdf'
    },
    {
        icon: '../pdfImage/image (2).png',
        category: 'Economics',
        title: 'Overview of Demographic Shifts and Aging Populations',
        author: 'Research Paper By Aditya Agarwal',
        file: '../pdf/Research-Paper-By-Aditya-Agarwal.pdf'
    },
    {
        icon: '../pdfImage/image (3).png',
        category: 'Finance',
        title: 'The Impact of Growth in Housing Loan Disbursements with Improvement of India HDI Scores across 2012-2022',
        author: 'Research Paper By Aizah Arora',
        file: '../pdf/Research-Paper-By-Aizah-Arora.pdf'
    },
    {
        icon: '../pdfImage/image (4).png',
        category: 'Behavioral Economics',
        title: 'What role do externalities play in the housing market, particularly in urban areas experiencing rapid growth or decline?',
        author: 'Research Paper By Aryaveer Dhillon',
        file: '../pdf/Research-Paper-By-Aryaveer-Dhillon.pdf'
    },
    {
        icon: '../pdfImage/image (5).png',
        category: 'Environmental Science',
        title: 'What policies can governments implement to reduce wealth disparities?',
        author: 'Research Paper By Kashish Jain',
        file: '../pdf/Research-Paper-By-Kashish-Jain.pdf'
    },
    {
        icon: '../pdfImage/image (6).png',
        category: 'Technology',
        title: 'How do variations in the Human Development Index (HDI) among BRICS countries correlate with differences in agricultural policies and farmer welfare?',
        author: 'Research Paper By Palak Samani',
        file: '../pdf/Research-Paper-By-Palak-Samani.pdf'
    },
    {
        icon: '../pdfImage/image (7).png',
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
        icon: '../pdfImage/image (8).png',
        category: 'Economics',
        title: 'To what extent have financial inclusion policies benefited small-scale entrepreneurs and fostered local economic development?',
        author: 'Research Paper By Tvisha Gupta',
        file: '../pdf/Research-Paper-By-Tvisha-Gupta.pdf'
    },
    {
        icon: '../pdfImage/image (9).png',
        category: 'Economics',
        title: 'How have India’s economic policies influenced its current unemployment situation, particularly in terms of skill development and workforce readiness?',
        author: 'Research paper by Virika Juneja',
        file: '../pdf/Research-Paper-By-Virika-Juneja.pdf'
    },
    {
        icon: '../pdfImage/image (10).png',
        category: 'Economics',
        title: 'How do different types of government policies (e.g., fiscal,monetary) affect economic growth rates?',
        author: 'Research paper by Aarav Baid',
        file: '../pdf/Aarav-Baid-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (11).png',
        category: 'Economics',
        title: 'How does price sensitivity vary among consumers in subscription services compared to traditional pay-per-product services?',
        author: 'Research Paper By Aarav Himatsinghania',
        file: '../pdf/Aarav-Himatsinghania-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (12).png',
        category: 'Economics',
        title: 'In what ways are technological advancements, such as blockchain, transforming international trade and finance operations?',
        author: 'Research Paper By Aarav Saraf',
        file: '../pdf/Aarav-Saraf-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (13).png',
        category: 'Economics',
        title: 'Investigate the strategies that emergent economies are employing tovaddress the escalating prices that have resulted from global supply chain disruptions and central bank interventions.',
        author: 'Research Paper By Aarna Kapoor',
        file: '../pdf/Aarna-Kapoor-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (14).png',
        category: 'Economics',
        title: 'How do smart logistics solutions facilitate the flow of trade in MENA countries, and what impact do they have on global supply chain efficiency?" Case study with DP world',
        author: 'Research Paper By Vihaan Poddar',
        file: '../pdf/Research-Paper-Vihaan-Poddar.pdf'
    },
    {
        icon: '../pdfImage/image (15).png',
        category: 'Economics',
        title: 'How effective is microfinance in reducing poverty in rural areas compared to urban settings?',
        author: 'Research Paper By Ahana Kotibhaskar',
        file: '../pdf/Ahana-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (16).png',
        category: 'Economics',
        title: 'How has Russia demonstrated economic resilience in response to Western sanctions, and what role have BRICS cooperation, domestic market adaptation, and sectoral strategies played in mitigating their impact? ',
        author: 'Research Paper By Alex Kutsik',
        file: '../pdf/Alex-Kutsik-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (17).png',
        category: 'Economics',
        title: 'To what extent do ambiguous regulations and rules impede the economic benefits derived from adventure sports activities in small regional economies?',
        author: 'Research paper by Angad Brar',
        file: '../pdf/Angad-Brar-Research-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (18).png',
        category: 'Economics',
        title: 'ASTUDYON SOCIALMOBILITYIN INDIAWITH FOCUS ON THE QSR INDUSTRY.',
        author: 'Research Paper By Anindita Pandyan',
        file: '../pdf/Anindita-Pandyan-Published-Paper.pdf'
    },
    {
        icon: '../pdfImage/image (19).png',
        category: 'Economics',
        title: 'How do carbon taxes influence the behaviour of industries with high carbon emissions, and what are the broader economic impacts of such taxes?',
        author: 'Research Paper By Arshia Dhingra',
        file: '../ppdf/Arshia-Dhingra-Research-Paper_67f8b6ca2d70b.pdf'
    },
    {
        icon: '../pdfImage/image (20).png',
        category: 'Economics',
        title: 'What role does big data play in shaping investment strategies and portfolio management in the financial industry?',
        author: 'Research Paper By Audarya Gupta',
        file: '../pdf/Audarya-Gupta-Research-Paper_67f8c861b87a5.pdf'
    },
    {
        icon: '../pdfImage/image (21).png',
        category: 'Economics',
        title: 'How does digital marketing influence consumer purchasing decisions?',
        author: 'Research Paper By Avisha Saraf',
        file: '../pdf/Avisha-Saraf-Research-paper_67f8cd20e3421.pdf'
    },
    {
        icon: '../pdfImage/image (22).png',
        category: 'Economics',
        title: 'What is the correlation between disposable income growth in urban and rural areas and the increase in SIP investments?',
        author: 'Research Paper By Dhruv Doshi',
        file: '../pdf/Dhruv-Doshi-Research-Paper_67f8ce15ecf81.pdf'
    },
    {
        icon: '../pdfImage/image (23).png',
        category: 'Economics',
        title: 'How have recent economic policies (e.g., GST, demonetization, Make in India) impacted investment portfolios in India?',
        author: 'Research Paper By Anvi Singh',
        file: '../pdf/Economic-Research-Paper-of-Anvi-Singh_67f8cf2419e0c.pdf'
    },
    {               
        icon: '../pdfImage/image (2).png',
        category: 'Economics',
        title: 'Explore the emergence of banking and financial institutions in ancient Greece, focusing on their role in economic development and commerce.',
        author: 'Research Paper By Viraj Nath',
        file: '../pdf/Economic-Research-Paper-Viraj-Nath_67f8cff4a0866.pdf'
    },
    {
        icon: '../pdfImage/image (24).png',
        category: 'Economics',
        title: 'Mechanisms of Resistance to Monoclonal Antibody Therapies in Cancer: Molecular, Cellular, and Tumor Microenvironment Factors Contributing to Therapeutic Evasion',
        author: 'Research Paper By Fia Inamdar',
        file: '../pdf/Fia-Inamdar-Research-Paper_67f8d095ef13d.pdf'
    },
    {
        icon: '../pdfImage/image (25).png',
        category: 'Economics',
        title: 'A research paper on Systematic Investment plan',
        author: 'Research Paper By Yash Somani',
        file: '../pdf/Internship-Report-Yash-Somani_67f8d18c478e6.pdf'
    },
    {
        icon: '../pdfImage/image (26).png',
        category: 'Economics',
        title: 'How do sponsorship and endorsement deals impact the revenue streams and brand equity of soccer clubs and players, and what are the key success factors in maximizing their value?',
        author: 'Research Paper By Jeet Mukherjea',
        file: '../pdf/Jeet-Mukherjea-research-paper_67ff88f5d9689.pdf'
    },
    {
        icon: '../pdfImage/image (27).png',
        category: 'Economics',
        title: 'How do interest rate changes influence capital structure decisions among SMEs in  the technology sector in the Indian economy?',
        author: 'Research Paper By Krrish Somani',
        file: '../pdf/Krrish-Somani-Research-Paper_67ff89e550d71.pdf'
    },
    {
        icon: '../pdfImage/image (28).png',
        category: 'Economics',
        title: 'How do minimum wage laws impact employment levels in different  industries?',
        author: 'Research Paper By Meenakshi Modi',
        file: '../pdf/Meenakshi-Modi-Research-paper_67ff8abfe50b1.pdf'
    },
    {
        icon: '../pdfImage/image (29).png',
        category: 'Economics',
        title: 'What role do art galleries and auction houses play in determining the value of Indian art today?',
        author: 'Research Paper By Nandini Jain',
        file: '../pdf/Nandini-Jain-Reseach-Paper_67ff8bf706f41.pdf'
    },
    {
        icon: '../pdfImage/image (30).png',
        category: 'Economics',
        title: 'What is the political impact of monetary policy transparency and central bank  independence?',
        author: 'Research Paper By  Neil jamb',
        file: '../pdf/Neil-Jamb-Research-paper_67ff8d948ee80.pdf'
    },
    {
        icon: '../pdfImage/image (31).png',
        category: 'Economics',
        title: 'How does FDI affect the development of the host country?',
        author: 'Research Paper By Piyush Gupta',
        file: '../pdf/Piyush-Gupta-Research-Paper-_6821db33ec78b.pdf'
    },
    {
        icon: '../pdfImage/image (32).png',
        category: 'Economics',
        title: 'What constitutional challenges have been raised against electoral bonds, and what are the potential legal outcomes?',
        author: 'Research Paper By Prisha Singhal',
        file: '../pdf/Prisha-Singhal-Reseach-Paper-1-_6821de8134fb6.pdf'
    },
    {
        icon: '../pdfImage/image (33).png',
        category: 'Economics',
        title: 'What role do small repeated behavioural cues play in forming long term  habits?',
        author: 'Research Paper By Paree Soni',
        file: '../pdf/Psychology-Research-Paper-by-Paree-Soni-_6821e0b1d315f.pdf'
    },
    {
        icon: '../pdfImage/image (34).png',
        category: 'Economics',
        title: 'OHow Can Stubble Burning in Punjab be transformed into an opportunity for generating green fuel, Fostering employment, increasing rural income, and driving economic growth in India?',
        author: 'Research Paper By Reianna Vallabh',
        file: '../pdf/Reianna-Vallabh-Research-Paper-2_6821e122b8c8b.pdf'
    },
    {
        icon: '../pdfImage/image (35).png',
        category: 'Economics',
        title: 'How does the implementation of European football clubs financial models and developmental leagues in India, influence our global competitiveness and fan engagement  of Indian football clubs ?',
        author: 'Research Paper By Abhinav Vasudevan',
        file: '../pdf/Reseach-Paper-Abhinav-Vasudevan_6821e25ea7fcb.pdf'
    },
    {
        icon: '../pdfImage/image (36).png',
        category: 'Economics',
        title: 'How effective is microfinance in reducing poverty in rural areas compared to urban settings?',
        author: 'Research Paper By Ahanna Kotibhaskar',
        file: '../pdf/Research-Papeby-Ahanna-Kotibhaskar_6821e34576e02.pdf'
    },
    {
        icon: '../pdfImage/image (37).png',
        category: 'Economics',
        title: 'Explore how emerging economies are tackling inflation in the wake of global supply chain issues and central bank interventions.',
        author: 'Research Paper By Aarna Kapoor',
        file: '../pdf/Research-Paper-Aarna-Kapoor_6821e3d3e16d2.pdf'
    },
    {
        icon: '../pdfImage/image (38).png',
        category: 'Economics',
        title: 'What are the economic impacts of minimum wage laws on  employment and business profitability?',
        author: 'Research Paper By Ishika Punjabi',
        file: '../pdf/Research-Paper-Ishika-Punjabi-_6821e4902aeb9.pdf'
    },
    {
        icon: '../pdfImage/image (39).png',
        category: 'Economics',
        title: 'What are the determinants of income inequality within and between  countries? ',
        author: 'Research Paper By Adrija Dutta',
        file: '../pdf/Research-Paper-Adrija-Dutta_6821e50b5ec14.pdf'
    },
    {
        icon: '../pdfImage/image (40).png',
        category: 'Economics',
        title: 'What are the effects of long-term exposure to artificial intelligence (AI) interactions on emotional intelligence and empathy in humans?  ',
        author: 'Research Paper By Aryana Bhadauria',
        file: '../pdf/Research-Paper-Aryana-Bhadauria_6821e62204082.pdf'
    },
    {
        icon: '../pdfImage/image (43).png',
        category: 'Economics',
        title: 'What impact have government incentives for startups had on employment and  innovation in India?  ',
        author: 'Research Paper By Krrish Somani',
        file: '../pdf/Research-Paper-Krishh-Somani._6822edda0f7aa.pdf'
    },
     {
        icon: '../pdfImage/image (44).png',
        category: 'Economics',
        title: 'What strategies can businesses adopt to remain competitive in an increasingly  digital economy?  ',
        author: 'Research Paper By Naisha Sahney',
        file: '../pdf/Research-Paper-Naisha-Sahney._6822ee7d34f35.pdf'
    },


];

// ================================
// YE CODE TOUCH MAT KARO
// Automatically cards bana dega
// ================================

function loadPapers() {
    const grid = document.getElementById('papersGrid');

    papers.forEach(paper => {
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
                       <a href="pdfs/${paper.file}" download class="btn btn-download">⬇️ Download</a>
                    </div>
                </div>
            </div>


                `;

        grid.innerHTML += card;
    });
}

// Page load hote hi papers show karo
loadPapers();
