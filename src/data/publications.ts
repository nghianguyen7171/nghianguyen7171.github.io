export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'journal' | 'conference';
  url?: string;
  doi?: string;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      'Band2CleanFormer: Integrating band-specific processing and inter-band attention for robust EEG denoising',
    authors: 'Battulga Ulziisaikhan, Trong-Nghia Nguyen, Soo-Hyung Kim',
    venue: 'Biomedical Signal Processing and Control, Vol. 119, 109860',
    year: 2026,
    type: 'journal',
    url: 'https://www.sciencedirect.com/science/article/pii/S1746809426004143',
    doi: '10.1016/j.bspc.2026.109860',
  },
  {
    title:
      'MediFusion-Flex: An Adaptive Multimodal Deep Learning Framework for Clinical Deterioration Prediction in Emergency Medicine',
    authors:
      'Trong-Nghia Nguyen, Hong-Hai Nguyen, Ngoc Tu Vu, Tuan Anh Tran, Soo-Hyung Kim, Bo-Gun Kho, Van-Thong Huynh',
    venue:
      'Multi-disciplinary Trends in Artificial Intelligence (MIWAI 2025), LNCS Vol. 16355, pp. 115–126, Springer',
    year: 2026,
    type: 'conference',
    url: 'https://link.springer.com/chapter/10.1007/978-981-95-4963-4_10',
    doi: '10.1007/978-981-95-4963-4_10',
    selected: true,
  },
  {
    title: 'Temporal Variational Autoencoder Model for In-hospital Clinical Emergency Prediction',
    authors:
      'Trong-Nghia Nguyen, Soo-Hyung Kim, Bo-Gun Kho, Nhu-Tai Do, Ngumimi-Karen Iyortsuun, Hyung-Jeong Yang',
    venue: 'Biomedical Signal Processing and Control, Vol. 100, Part C, 106975',
    year: 2025,
    type: 'journal',
    url: 'https://doi.org/10.1016/j.bspc.2024.106975',
    doi: '10.1016/j.bspc.2024.106975',
  },
  {
    title:
      'Dual-stream transformer approach for pain assessment using visual-physiological data modeling',
    authors:
      'Minh-Duc Nguyen, Hyung-Jeong Yang, Duy-Phuong Dao, Soo-Hyung Kim, Seung-Won Kim, Ji-Eun Shin, Ngoc Anh Thi Nguyen, Trong-Nghia Nguyen, et al.',
    venue: 'PeerJ Computer Science, 11:e3158',
    year: 2025,
    type: 'journal',
    url: 'https://doi.org/10.7717/peerj-cs.3158',
    doi: '10.7717/peerj-cs.3158',
  },
  {
    title:
      'Explainable Deep Contrastive Federated Learning System for Early Prediction of Clinical Status in Intensive Care Unit',
    authors:
      'Trong-Nghia Nguyen, Hyung-Jeong Yang, Bo-Gun Kho, Sae-Ryung Kang, Soo-Hyung Kim',
    venue: 'IEEE Access, Vol. 12, pp. 117176–117202',
    year: 2024,
    type: 'journal',
    url: 'https://ieeexplore.ieee.org/abstract/document/10643963',
    doi: '10.1109/ACCESS.2024.3447759',
  },
  {
    title:
      'Multi-Gradient Siamese Temporal Model for the Prediction of Clinical Events in Rapid Response Systems',
    authors: 'Trong-Nghia Nguyen, Soo-Hyung Kim, Bo-Gun Kho, Hyung-Jeong Yang',
    venue: 'IEEE Intelligent Systems, Vol. 39, no. 6, pp. 58–69',
    year: 2024,
    type: 'journal',
    url: 'https://ieeexplore.ieee.org/document/10559396',
    doi: '10.1109/MIS.2024.3408290',
    selected: true,
  },
  {
    title:
      'A Hybrid CNN-LSTM Approach for Effective Denoising of EEG Signals Contaminated by EOG Artifacts',
    authors: 'Battulga Ulziisaikhan, Trong-Nghia Nguyen, Soo-Hyung Kim',
    venue:
      'Annual Conference of Korea Information Processing Society (ACK 2024), Vol. 31, No. 2, pp. 573–576',
    year: 2024,
    type: 'conference',
    url: 'https://www.manuscriptlink.com/society/kips/conference/ack2024/programBook/presentation/pdf/oral/KIPS_C2024B0140',
  },
  {
    title: 'Ensemble spatial and temporal vision transformer for action units detection',
    authors: 'Ngoc Tu Vu, Van-Thong Huynh, Trong-Nghia Nguyen, Soo-Hyung Kim',
    venue:
      'IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), pp. 5770–5776',
    year: 2023,
    type: 'conference',
    url: 'https://ieeexplore.ieee.org/document/10208411',
  },
  {
    title: 'A TabNet-Based System for Water Quality Prediction in Aquaculture',
    authors:
      'Trong-Nghia Nguyen, Soo Hyung Kim, Nhu-Tai Do, Thai-Thi Ngoc Hong, Hyung Jeong Yang, Guee Sang Lee',
    venue: 'Smart Media Journal, Vol. 11, No. 2, pp. 39–52',
    year: 2022,
    type: 'journal',
    url: 'https://scholar.kyobobook.co.kr/article/detail/4010028853746',
    doi: '10.30693/SMJ.2022.11.2.39',
  },
  {
    title:
      'Deep learning-based model for rapid prediction of in-hospital clinical deterioration',
    authors: 'Trong-Nghia Nguyen, Bo-Gun Kho, Hyung-Jeong Yang, Soo-Hyung Kim',
    venue:
      '10th International Conference on Big Data Applications and Services (BIGDAS 2022), pp. 81–88',
    year: 2022,
    type: 'conference',
  },
  {
    title: 'Stress analysis based on feature-level late fusion',
    authors: 'Eun-Bin Choi, Hong-Hai Nguyen, Trong-Nghia Nguyen, Soo-Hyung Kim',
    venue: 'International Conference on Smart Media and Applications (SMA 2022), pp. 110–114',
    year: 2022,
    type: 'conference',
    url: 'https://manuscriptlink-society-file.s3-ap-northeast-1.amazonaws.com/kism/conference/sma2022fall/abs/0023F.pdf',
  },
  {
    title: 'Deep Interpretable Learning for a Rapid Response System',
    authors:
      'Trong-Nghia Nguyen, Thanh-Hung Vo, Bo-Gun Kho, Guee-Sang Lee, Hyung-Jeong Yang, Soo-Hyung Kim',
    venue:
      'Korea Information Processing Society Conference (KIPS), pp. 805–807',
    year: 2021,
    type: 'conference',
    url: 'https://koreascience.or.kr/article/CFKO202133648994961.page',
  },
  {
    title:
      'How feature fusion can help to improve multi-shot person re-identification performance?',
    authors:
      'Thuy-Binh Nguyen, Trong-Nghia Nguyen, Hong-Quan Nguyen, Thi-Lan Le, Thi Thanh Thuy Pham',
    venue:
      'International Conference on Multimedia Analysis and Pattern Recognition (MAPR), pp. 1–6',
    year: 2020,
    type: 'conference',
    url: 'https://ieeexplore.ieee.org/document/9237782',
  },
];

export function publicationsByYear() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: publications.filter((p) => p.year === year),
  }));
}
