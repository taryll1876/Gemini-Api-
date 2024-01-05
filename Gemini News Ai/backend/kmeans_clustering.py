import sys
import json
import numpy as np
from sklearn.cluster import KMeans

user_interaction_data = json.loads(sys.argv[1])

data_array = np.array(user_interaction_data)

kmeans = KMeans(n_clusters=3)
kmeans.fit(data_array)


