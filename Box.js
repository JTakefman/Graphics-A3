// Constructor
function BoxShape(attributes) {
    RenderShape.call(this,attributes)

  this.vertex = new Float32Array([ 
	2.04232, -1, 1.82365, 1.83955, -1, 1.82365, 1.83955, -1, 1.34559, -0.801843, -0.884338, 1.33953, -0.116287, -0.884338, 1.82365, -0.801843, -0.884338, 1.82365, 1.83955, -0.884338, 1.82365, 1.17562, -0.884338, 1.82365, 1.83955, -0.884338, 1.34559, -0.708634, -1.42347, 4.71273, 1.75095, -1.42347, 4.71273, 0.521158, -1.42347, 5.96277, 0.370043, -0.806398, -0.838508, -0.801843, -1, 1.82365, -1, -1, 1.82365, -0.801843, -1, 1.33953, -0.89634, 3.42388,
	4.5482, 0.521158, 3.42388, 5.98904, 1.93866, 3.42388, 4.5482, -0.438842, -0.806398, -0.838508, -0.824682, -1.04881, 1.82365, 1.8634, -1.04981, 1.82365, 2.04232, -1.42347, 1.82365, 0.521158, -1.42347, 1.82365, -0.438842, -0.806398, 0.878719, 0.370043, -0.806398, 0.878719, -1, -1, 1.02486, -0.801843, -1, 1.02486, 2.04232, -1, 1.34559, -1, -1, 1.33953, 1.83955, -1, 1.02486, 2.04232, -1, 1.02486, -1, -1.42347, 1.82365, -0.933771,
	-0.90201, 1.92164, -0.933771, 3.39765, 4.49265, -0.933771, 3.39765, -0.90201, -0.933771, -0.90201, -0.90201, 2.00405, 3.35927, -0.863628, 2.00405, -0.863628, 1.96002, 2.00405, -0.863628, -0.863628, 1.17562, -0.96011, 1.82365, 1.83955, -0.96011, 1.34559, -1, 3.39765, -0.90201, -1, -0.90201, -0.90201, 2.34835, 0.889106, 4.10026, 2.04232, 1.03609, 4.40949, 2.04232, 3.49564, 4.59064, 2.34835, 3.49564, 4.28142, 0.518854, -0.884338, 1.02486, 1.83955, -0.884338, 1.02486,
	0.780993, -0.884338, 1.82365, 0.505764, -0.884338, 1.82365, 2.04232, 1.03609, 4.27312, 2.04232, -1.2871, 4.45427, 2.00405, -1.2871, 4.45427, 2.00405, 1.03609, 4.27312, -0.116287, -1, 1.82365, -0.89634, 3.49564, 4.5482, 0.521158, 3.49564, 5.98904, 1.17562, -1, 1.82365, 0.780993, -1, 1.82365, 0.780993, -0.96011, 1.82365, 0.230535, -1, 1.82365, -0.116287, -0.95805, 1.82365, 0.230535, -0.95805, 1.82365, 1.49548, -0.884338, 0.755054, 1.393, -0.884338,
	0.755054, -0.801843, -0.95805, 1.33953, 0.518854, -0.958294, 0.878719, 1.83955, -0.958294, 0.878719, 1.83955, -0.958294, 1.02486, 0.518854, -0.958294, 1.02486, -0.801843, -0.884338, 1.02486, -0.801843, -0.958294, 1.02486, -0.323562, -1, -0.955474, -0.323562, -1, -1.08373, -0.323562, -1.13277, -1.08373, -0.323562, -1.13277, -0.955474, 1.83955, -1, 0.878719, -0.801843, -1, 0.878719, -0.801843, -0.958294, 0.878719, -0.801843, -0.95805, 1.02486, 0.230535, -0.884338, 1.82365, 1.83955,
	-0.96011, 1.02486, 0.521158, -1.42347, 1.99069, -0.832961, -1.42347, 1.99069, -0.832961, -1.42347, 4.4236, 1.87528, -1.42347, 4.4236, 2.04232, -1.42347, 4.59064, -1, -1.42347, 4.59064, -0.445784, -1.24451, 4.01151, -0.832961, -1.24451, 4.4236, -0.832961, -1.24451, 1.99069, -0.445784, -1.24451, 2.80197, 1.87528, -1.42347, 1.99069, 1.87528, -1.24451, 1.99069, 0.521158, -1.24451, 1.99069, 1.87528, -1.24451, 4.4236, -1.29373, 0.889106, 4.20171, -1.29373, -1.71743, 4.38286,
	0.521158, -1.71743, 6.24771, 0.521158, 0.889106, 6.06656, -1.29373, 3.49564, 4.38286, 0.521158, 3.49564, 6.24771, 0.521158, 3.89752, 6.24771, -1.29373, 3.89752, 4.38286, -1, 3.49564, 4.59064, -1.29373, 3.49564, 4.272, -1.29373, 3.89752, 4.272, -1, 3.89752, 4.59064, -1.29373, -1.71743, 4.272, 0.521158, -1.71743, 6.13684, -1.29373, 0.889106, 4.09084, 2.34835, -1.71743, 4.28142, 2.34835, -1.71743, 4.39229, -1, 1.03609, 4.40949, 2.34835, 0.889106,
	4.21113, 1.75095, -1.47777, 4.71273, 0.521158, -1.47777, 5.96277, 1.93866, 3.49564, -0.851814, -0.89634, 3.49564, -0.851814, -0.89634, 3.42388, -0.851814, 1.93866, 3.42388, -0.851814, -1, -1, -0.955474, -1, 3.49564, -0.955474, -1, 3.49564, -1.08373, -1, -1, -1.08373, 0.370043, -0.942659, -0.838508, -0.438842, -0.941845, -0.838508, 2.04232, -1.47777, 4.59064, 0.505764, -1, 1.82365, -0.438842, -0.941819, 0.878719, 0.370043, -0.942633, 0.878719, -0.570888,
	-0.884338, -0.838508, -0.570888, -0.884338, 0.878719, -0.801843, -0.884338, 0.878719, -0.801843, -0.884338, -0.838508, 0.520431, -0.942659, -0.838508, 0.520431, -0.942633, 0.878719, 0.520431, -0.884338, -0.838508, 0.520431, -0.884338, 0.878719, 0.850611, -0.884338, -0.122089, 0.850611, -0.884338, 0.00412771, 0.850611, -0.925282, 0.00412771, 0.850611, -0.925282, -0.122089, -0.570888, -0.941819, 0.878719, -0.570888, -0.941845, -0.838508, 1.49548, -0.884338, -0.227558, 1.49548, -0.925282, -0.227558, 1.49548, -0.925282, -0.133808,
	0.850611, -0.884338, 0.0189919, 0.850611, -0.884338, 0.114784, 0.850611, -0.925282, 0.114784, 0.850611, -0.925282, 0.0189919, 0.850611, -0.884338, 0.453728, 0.850611, -0.884338, 0.467536, 0.850611, -0.925282, 0.467536, 0.850611, -0.925282, 0.453728, 1.49548, -0.925282, -0.122089, 1.49548, -0.925282, 0.00412769, 1.38002, -0.884338, 0.755054, 0.809731, -0.884338, 0.795934, 1.53636, -0.884338, 0.795934, 1.83955, -0.884338, 0.878719, 0.850611, -0.884338, 0.599479, 0.850611, -0.884338, 0.611295, 0.850611, -0.925282,
	-0.227558, 0.809731, -0.925282, -0.268438, 1.53636, -0.925282, -0.268438, 0.809731, -0.884338, -0.268438, 1.49548, -0.925282, 0.186032, 1.49548, -0.925282, 0.311561, 0.850611, -0.925282, 0.611295, 0.850611, -0.925282, 0.599479, 0.955108, -0.884338, 0.755054, 0.850611, -0.884338, 0.755054, 0.850611, -0.884338, -0.133808, 0.850611, -0.925282, 0.755054, 1.53636, -0.884338, -0.268438, 1.53636, -0.925282, 0.795934, 1.49548, -0.925282, 0.114784, 0.850611, -0.925282, 0.186032, 0.809731, -0.925282, 0.795934, 1.49548,
	-0.925282, 0.611295, 1.49548, -0.925282, 0.755054, 1.49548, -0.925282, 0.325509, 1.49548, -0.925282, 0.453728, 1.49548, -0.925282, 0.0189919, 1.83955, -0.884338, -0.838508, 1.25118, -0.884338, 0.755054, 1.23907, -0.884338, 0.755054, 0.850611, -0.884338, 0.311561, 0.850611, -0.884338, 0.325509, 0.850611, -0.925282, 0.325509, 0.850611, -0.925282, 0.311561, 1.11185, -0.884338, 0.755054, 1.0998, -0.884338, 0.755054, 0.850611, -0.925282, -0.133808, 1.49548, -0.925282, 0.467536, 1.49548, -0.925282, 0.599479,
	0.955108, -0.884338, -0.227558, 0.966019, -0.884338, -0.227558, 0.850611, -0.884338, -0.227558, 1.11988, -0.884338, -0.227558, 1.24428, -0.884338, -0.227558, 1.25875, -0.884338, -0.227558, 1.38799, -0.884338, -0.227558, 1.40249, -0.884338, -0.227558, 1.10619, -0.884338, -0.227558, 0.966161, -0.884338, 0.755054, 0.850611, -0.884338, 0.186032, 0.349695, -1.24451, 3.97235, 0.349695, -1.24451, 2.84113, 0.389587, -1.24451, 2.84113, 0.389587, -1.24451, 3.97235, -0.708634, -1.47777, 4.71273, 0.521158, -1.47777,
	6.13684, -1, -1.47777, 4.59064, 0.521158, -1.42347, 6.13684, 0.349695, -1.24451, 2.80197, -0.406617, -1.24451, 2.84113, 0.681259, -1.24451, 2.80197, 1.47674, -1.24451, 2.80197, 1.43757, -1.24451, 2.84113, 0.681259, -1.24451, 2.84113, 0.681259, -1.24451, 4.01151, 0.681259, -1.24451, 3.97235, 1.43757, -1.24451, 3.97235, 1.47674, -1.24451, 4.01151, 0.641675, -1.24451, 2.80197, 0.641675, -1.24451, 2.84113, 0.389587, -1.24451, 4.01151, 0.349695, -1.24451, 4.01151, -0.406617,
	-1.24451, 3.97235, 0.389587, -1.24451, 2.80197, 0.641675, -1.24451, 3.97235, 0.641675, -1.24451, 4.01151, 2.04232, 3.35927, -0.863628, 2.04232, -0.863628, -0.863628, 2.04232, -1, -0.955474, 2.04232, 3.49564, -0.955474, 2.04232, -0.863628, 1.34535, 2.04232, -0.863628, 1.96002, 2.04232, -1.2871, 1.96002, 2.04232, 3.35927, 4.45427, 2.00405, -1.2871, 1.96002, -1, -0.90201, 1.02468, -1, 1.03609, 4.3115, -1, -1.32548, 4.49265, -1, -1.32548, 1.92164,
	-1, -0.90201, 1.92164, -0.933771, -1.32548, 4.49265, -0.933771, -1.32548, 1.92164, -1, 3.39765, 4.49265, -0.933771, 1.03609, 4.3115, 2.04232, -1, -1.08373, 2.04232, 3.49564, -1.08373, 0.231644, -1, -0.955474, 0.231644, -1, -1.08373, 0.231644, -1.13277, -0.955474, 0.231644, -1.13277, -1.08373, 0.521158, 3.49564, 6.13684, 1.93866, 3.49564, 4.5482, -0.801843, -1, -0.838508, 1.83955, -1, -0.838508, 2.34835, 3.49564, 4.39229, 2.00405, 3.35927,
	4.45427, 0.842699, 0.291178, 6.06996, 0.842699, -0.137206, 6.06996, 0.764624, -0.232861, 6.06996, 0.764624, 0.386833, 6.06996, 1.27042, -0.232861, 6.06996, 1.27042, -0.232861, 6.4736, 0.764624, -0.232861, 6.4736, 1.19235, -0.137206, 6.06996, 1.19235, 0.291178, 6.06996, 1.27042, 0.386833, 6.06996, 1.27042, 0.386833, 6.4736, 0.764624, 0.386833, 6.4736, 0.842699, 0.291178, 5.78161, 0.842699, -0.137206, 5.81138, 1.19235, 0.291178, 5.42655, 1.19235, -0.137206, 5.45633, 2.34835,
	3.89752, 4.39229, 0.521158, 3.89752, 6.13684, 2.04232, 3.89752, 4.59064, 2.34835, 3.89752, 4.28142, 1.83955, -0.942143, 0.878719, -0.801843, -0.942143, 0.878719, -1, -0.90201, 1.33934, 2.04232, -0.863628, 1.02495, 0.349695, -1.15085, 3.97235, 0.349695, -1.1879, 3.23768, 0.349695, -1.15085, 3.23768, 0.349695, -1.1879, 3.15697, 0.349695, -1.15085, 2.84113, 0.349695, -1.15085, 3.15697, 0.681259, -1.18377, 3.15697, 0.681259, -1.14671, 2.84113, 0.681259, -1.14671, 3.15697,
	0.681259, -1.18377, 3.23768, 0.681259, -1.14671, 3.97235, 0.681259, -1.14671, 3.23768, -0.406617, -1.1879, 3.15697, -0.406617, -1.15085, 2.84113, -0.406617, -1.15085, 3.15697, -0.406617, -1.1879, 3.23768, -0.406617, -1.15085, 3.97235, -0.406617, -1.15085, 3.23768, 1.67601, -1.24451, 2.39633, 1.03668, -1.14671, 3.97235, 1.07427, -1.14671, 3.97235, 1.43757, -1.14671, 3.97235, -0.0553244, -1.15085, 3.97235, -0.0139959, -1.15085, 3.97235, 1.43757, -1.18377, 3.23768, 1.43757, -1.14671,
	3.23768, 1.43757, -1.18377, 3.15697, 1.43757, -1.14671, 2.84113, 1.43757, -1.14671, 3.15697, 1.03668, -1.14671, 2.84113, 1.07427, -1.14671, 2.84113, -0.0553244, -1.15085, 2.84113, -0.0139959, -1.15085, 2.84113, 1.83955, -1, 1.82365, 0.780993, -0.96011, 1.82365, 1.83955, -0.96011, 1.02486, 0.521158, -1.42347, 1.99069, 0.521158, -1.71743, 6.24771, 2.34835, -1.71743, 4.39229, 2.34835, -1.71743, 4.28142, 1.75095, -1.42347, 4.71273, 1.75095, -1.42347, 4.71273, 2.04232,
	-1.42347, 4.59064, 1.75095, -1.47777, 4.71273, 0.370043, -0.942659, -0.838508, 0.370043, -0.942633, 0.878719, 0.370043, -0.806398, 0.878719, 0.370043, -0.942633, 0.878719, 0.370043, -0.942659, -0.838508, 0.520431, -0.942633, 0.878719, 0.520431, -0.942659, -0.838508, -0.570888, -0.884338, 0.878719, -0.570888, -0.884338, -0.838508, 0.520431, -0.884338, 0.878719, 0.520431, -0.884338, -0.838508, -0.438842, -0.941819, 0.878719, -0.438842, -0.806398, -0.838508, 2.34835, -1.71743, 4.39229, 2.34835, 0.889106, 4.21113,
	-0.832961, -1.42347, 4.4236, -0.832961, -1.42347, 1.99069, 0.521158, -1.47777, 5.96277, 1.75095, -1.47777, 4.71273, 2.04232, -1.47777, 4.59064, -1, -1.42347, 4.59064, -1, -1.47777, 4.59064, 0.521158, -1.47777, 6.13684, 2.04232, -1, 1.82365, 2.04232, -1.42347, 1.82365, 2.04232, -1.42347, 4.59064, 2.04232, -1.2871, 4.45427, 2.04232, -1.2871, 1.96002, 2.04232, -1.2871, 1.96002, 2.04232, -0.863628, 1.96002, -1, -0.90201, -0.90201, -1, -1,
	-0.955474, -1, 3.39765, -0.90201, -0.323562, -1, -0.955474, -1, -1, -0.955474, -1, -1, -1.08373, -0.323562, -1, -0.955474, -0.323562, -1, -1.08373, 0.231644, -1, -1.08373, 0.231644, -1, -1.08373, 0.231644, -1.13277, -1.08373, 0.231644, -1.13277, -0.955474, -0.323562, -1.13277, -1.08373, 0.231644, -1.13277, -1.08373, -1, 3.49564, -0.955474, -1, 3.49564, -1.08373, -1, 3.39765, -0.90201, -0.933771, 3.39765, -0.90201, 2.04232,
	3.49564, 4.59064, 0.521158, 3.49564, 5.98904, 1.93866, 3.49564, 4.5482, -0.570888, -0.941845, -0.838508, -0.570888, -0.884338, -0.838508, -0.801843, -0.884338, -0.838508, 0.520431, -0.884338, -0.838508, 0.520431, -0.942659, -0.838508, 2.04232, 3.35927, 4.45427, 2.04232, 1.03609, 4.27312, 1.27042, 0.386833, 6.06996, 1.27042, -0.232861, 6.06996, 1.27042, 0.386833, 6.4736, 0.764624, 0.386833, 6.06996, 0.764624, -0.232861, 6.06996, 0.764624, 0.386833, 6.4736, 0.842699, -0.137206, 6.06996,
	0.842699, 0.291178, 6.06996, 1.19235, 0.291178, 5.42655, 0.842699, 0.291178, 5.78161, 0.842699, 0.291178, 6.06996, 1.19235, 0.291178, 6.06996, 0.842699, -0.137206, 5.81138, 1.19235, -0.137206, 5.45633, 1.19235, -0.137206, 6.06996, 0.842699, -0.137206, 6.06996, 1.19235, -0.137206, 5.45633, 1.19235, 0.291178, 5.42655, 1.19235, 0.291178, 6.06996, 1.19235, -0.137206, 6.06996, 2.34835, 3.49564, 4.28142, 2.04232, 3.49564, 4.59064, 2.34835, 3.49564, 4.39229, 2.34835, 3.89752,
	4.28142, 2.34835, 3.89752, 4.39229, 0.520431, -0.884338, 0.878719, 1.83955, -0.884338, 0.878719, -0.570888, -0.884338, 0.878719, -0.801843, -0.884338, 0.878719, 0.518854, -0.958294, 0.878719, 0.520431, -0.942633, 0.878719, 0.505764, -0.884338, 1.82365, 0.230535, -0.884338, 1.82365, 2.04232, -0.863628, -0.863628, -0.832961, -1.42347, 1.99069, -0.832961, -1.24451, 1.99069, 0.349695, -1.24451, 2.84113, 0.349695, -1.24451, 3.97235, -1, -1, 1.02486, -0.801843, -1, 1.02486, 1.83955,
	-1, -0.838508, 1.83955, -0.942143, 0.878719, 1.83955, -0.884338, -0.838508, 1.83955, -0.884338, 0.878719, 0.681259, -1.24451, 3.97235, -0.406617, -1.24451, 2.84113, 0.850611, -0.925282, -0.122089, 0.850611, -0.925282, 0.00412771, 0.850611, -0.925282, 0.0189919, 0.850611, -0.925282, 0.114784, 0.850611, -0.925282, 0.599479, -0.801843, -0.884338, -0.838508, -0.801843, -1, 0.878719, -0.801843, -1, -0.838508, 0.850611, -0.925282, 0.755054, 1.49548, -0.925282, 0.755054, 1.49548, -0.925282, -0.227558,
	0.681259, -1.24451, 4.01151, 1.47674, -1.24451, 4.01151, 0.389587, -1.24451, 4.01151, 1.87528, -1.24451, 1.99069, 1.47674, -1.24451, 2.80197, -0.406617, -1.24451, 3.97235, 0.349695, -1.24451, 3.97235, 0.349695, -1.15085, 3.97235, 1.43757, -1.24451, 2.84113, 1.43757, -1.24451, 3.97235, 0.389587, -1.24451, 2.84113, 0.641675, -1.24451, 3.97235, 0.389587, -1.24451, 3.97235, -1, -0.90201, 1.02468, -0.933771, -0.90201, -0.90201, -1, -0.90201, -0.90201, 2.00405, -0.863628,
	1.96002, 2.00405, -1.2871, 4.45427, 2.00405, -1.2871, 1.96002, 2.00405, 1.03609, 4.27312, 1.83955, -1, -0.838508, 0.231644, -1, -0.955474, 2.04232, -1, -0.955474, -1, -1, -0.955474, -0.801843, -1, -0.838508, 2.34835, -1.71743, 4.28142, 2.04232, -1.42347, 4.59064, 2.34835, 0.889106, 4.10026, -1.29373, -1.71743, 4.272, -1, -1.42347, 4.59064, 0.521158, -1.71743, 6.13684, 0.521158, 3.89752, 6.24771, 2.04232, 3.89752, 4.59064, 2.34835,
	3.89752, 4.39229, 2.34835, 3.89752, 4.28142, -0.570888, -0.941819, 0.878719, -0.801843, -0.958294, 0.878719, -0.933771, -0.90201, 1.92164, -0.933771, 3.39765, 4.49265, 2.00405, -0.863628, 1.96002, 2.04232, -0.863628, -0.863628, 2.00405, -0.863628, -0.863628, 2.04232, -0.863628, 1.34535, 2.04232, -0.863628, 1.96002, 2.04232, -1, 1.02486, 1.83955, -1, 1.02486, 0.521158, -1.42347, 1.82365, 1.43757, -1.24451, 2.84113, 0.681259, -1.14671, 2.84113, 0.681259, -1.24451, 2.84113,
	2.04232, -1, 1.82365, 1.83955, -1, 1.82365, -0.801843, -0.884338, 1.33953, -0.116287, -0.884338, 1.82365, 1.83955, -0.884338, 1.82365, 1.83955, -0.884338, 1.34559, -0.708634, -1.42347, 4.71273, 1.75095, -1.42347, 4.71273, 0.521158, -1.42347, 5.96277, -1, -1, 1.82365, -0.801843, -1, 1.33953, 0.521158, 3.42388, 5.98904, 1.93866, 3.42388, 4.5482, -1, -1, 1.82365, -0.801843, -1, 1.82365, 2.04232, -1.42347, 1.82365, 2.04232, -1,
	1.34559, -1, -1, 1.33953, -1, -1.42347, 1.82365, -0.933771, 3.39765, -0.90201, -0.933771, -0.90201, -0.90201, 2.00405, 3.35927, -0.863628, 2.00405, -0.863628, -0.863628, 1.83955, -0.884338, 1.34559, 1.17562, -0.884338, 1.82365, 1.17562, -0.96011, 1.82365, 1.83955, -0.96011, 1.34559, 1.83955, -1, 1.34559, 1.83955, -0.884338, 1.02486, 2.04232, -1.2871, 4.45427, 2.00405, -1.2871, 4.45427, -0.801843, -0.884338, 1.82365, -0.116287, -0.884338, 1.82365, 0.521158,
	3.49564, 5.98904, 0.521158, 3.42388, 5.98904, -0.89634, 3.42388, 4.5482, -0.801843, -1, 1.82365, -0.801843, -1, 1.33953, -0.801843, -0.884338, 1.33953, -0.801843, -0.884338, 1.82365, -0.116287, -0.95805, 1.82365, 1.17562, -0.884338, 1.82365, 1.83955, -0.884338, 1.82365, 0.518854, -0.884338, 1.02486, -0.801843, -0.884338, 1.02486, -0.801843, -0.958294, 1.02486, 0.518854, -0.958294, 1.02486, -0.323562, -1.13277, -0.955474, 1.83955, -1, 0.878719, 1.83955, -1, 1.02486,
	1.83955, -0.958294, 1.02486, 1.83955, -0.958294, 0.878719, -0.801843, -1, 1.02486, -0.801843, -1, 0.878719, -0.801843, -0.958294, 0.878719, -0.801843, -0.958294, 1.02486, -0.801843, -0.95805, 1.33953, -0.801843, -0.95805, 1.02486, 0.230535, -0.95805, 1.82365, -0.116287, -0.95805, 1.82365, 0.230535, -0.95805, 1.82365, -0.801843, -0.95805, 1.02486, -0.801843, -0.884338, 1.02486, 0.230535, -0.884338, 1.82365, -0.801843, -0.95805, 1.33953, 1.83955, -0.96011, 1.02486, 1.83955, -0.96011,
	1.34559, 1.17562, -0.96011, 1.82365, 0.780993, -0.96011, 1.82365, 1.83955, -1, 1.34559, 0.780993, -0.884338, 1.82365, -0.832961, -1.24451, 4.4236, -0.832961, -1.24451, 1.99069, -0.445784, -1.24451, 2.80197, 1.87528, -1.42347, 4.4236, -0.832961, -1.42347, 4.4236, -0.832961, -1.24451, 4.4236, 1.87528, -1.24451, 4.4236, 0.521158, 0.889106, 6.06656, 0.521158, 3.49564, 6.24771, 0.521158, 3.89752, 6.24771, -1.29373, 3.89752, 4.38286, -1, 3.49564, 4.59064, -1.29373,
	3.49564, 4.272, -1.29373, 3.89752, 4.272, -1, 3.89752, 4.59064, -1.29373, -1.71743, 4.272, -1.29373, -1.71743, 4.38286, -1.29373, 0.889106, 4.09084, 1.87528, -1.42347, 1.99069, -1, 3.49564, -0.955474, 1.87528, -1.42347, 1.99069, 1.87528, -1.42347, 4.4236, 1.87528, -1.24451, 4.4236, 1.87528, -1.24451, 1.99069, -0.438842, -0.806398, 0.878719, 0.370043, -0.806398, -0.838508, -0.438842, -0.941845, -0.838508, -0.438842, -0.941819, 0.878719, -0.570888, -0.941819, 0.878719,
	-0.570888, -0.941845, -0.838508, 0.850611, -0.925282, 0.611295, 0.850611, -0.925282, 0.755054, 1.53636, -0.884338, -0.268438, 1.53636, -0.884338, 0.795934, 1.53636, -0.925282, 0.795934, 1.53636, -0.925282, -0.268438, 0.809731, -0.884338, -0.268438, 0.809731, -0.925282, -0.268438, 0.809731, -0.925282, 0.795934, 0.809731, -0.884338, 0.795934, -0.438842, -0.941845, -0.838508, 0.809731, -0.884338, -0.268438, 1.53636, -0.884338, -0.268438, 1.53636, -0.925282, -0.268438, 0.809731, -0.925282, -0.268438, 1.83955, -0.884338,
	-0.838508, 1.53636, -0.884338, 0.795934, 0.809731, -0.884338, 0.795934, 0.809731, -0.925282, 0.795934, 1.53636, -0.925282, 0.795934, 0.850611, -0.925282, 0.311561, 0.850611, -0.925282, -0.133808, 0.850611, -0.925282, -0.227558, 0.850611, -0.925282, 0.186032, 0.521158, -1.71743, 6.24771, -1, -1.42347, 4.59064, -0.708634, -1.42347, 4.71273, -0.708634, -1.47777, 4.71273, -1, -1.47777, 4.59064, 2.04232, -1.42347, 4.59064, 0.521158, -1.42347, 6.13684, 0.521158, -1.47777, 6.13684, 2.04232,
	-1.47777, 4.59064, -0.708634, -1.42347, 4.71273, 0.521158, -1.42347, 5.96277, 0.521158, -1.47777, 5.96277, -0.708634, -1.47777, 4.71273, 0.641675, -1.24451, 2.80197, 0.641675, -1.24451, 2.84113, -0.445784, -1.24451, 4.01151, 0.389587, -1.24451, 2.80197, 0.641675, -1.24451, 4.01151, 2.04232, -1, -0.955474, 2.04232, 1.03609, 4.40949, 2.04232, 3.35927, -0.863628, 2.00405, -1.2871, 1.96002, -1, -1.42347, 4.59064, -1, 1.03609, 4.40949, -1, -1.42347, 1.82365,
	-1, -1.32548, 1.92164, -1, -1.32548, 4.49265, -0.933771, -1.32548, 4.49265, -0.933771, -1.32548, 1.92164, -1, 1.03609, 4.3115, -1, 3.39765, 4.49265, -0.933771, 3.39765, 4.49265, -0.933771, 1.03609, 4.3115, -1, -0.90201, 1.92164, -1, -1.32548, 1.92164, -0.933771, -1.32548, 1.92164, -0.933771, -0.90201, 1.92164, -1, 3.39765, 4.49265, -0.323562, -1, -1.08373, 2.04232, 3.49564, -0.955474, 2.04232, -1, -0.955474, 2.04232, -1,
	-1.08373, 2.04232, 3.49564, -1.08373, 0.231644, -1, -0.955474, 0.231644, -1.13277, -0.955474, -0.323562, -1.13277, -1.08373, 0.231644, -1, -0.955474, -0.323562, -1.13277, -0.955474, 2.04232, 3.49564, -0.955474, -0.89634, 3.49564, 4.5482, -1, 3.49564, 4.59064, -0.89634, 3.49564, -0.851814, 1.93866, 3.49564, -0.851814, 2.04232, 3.49564, -0.955474, -1, 3.49564, -0.955474, -0.89634, 3.49564, -0.851814, -0.89634, 3.42388, -0.851814, 2.00405, 3.35927, 4.45427, -1,
	-1.32548, 4.49265, -0.933771, -1.32548, 4.49265, 0.764624, -0.232861, 6.06996, 1.27042, -0.232861, 6.06996, 1.27042, -0.232861, 6.4736, 0.764624, -0.232861, 6.4736, 0.842699, -0.137206, 6.06996, 1.19235, -0.137206, 6.06996, 1.27042, -0.232861, 6.06996, 0.764624, -0.232861, 6.06996, 0.764624, 0.386833, 6.4736, 0.764624, -0.232861, 6.4736, 0.764624, 0.386833, 6.06996, 1.27042, 0.386833, 6.06996, 0.521158, 3.49564, 6.13684, 0.521158, 3.89752, 6.13684, -1.29373, 3.89752, 4.272,
	0.521158, 3.49564, 6.13684, 1.83955, -0.958294, 0.878719, 0.780993, -0.884338, 1.82365, 1.83955, -0.884338, 1.02486, 1.83955, -0.958294, 1.02486, 1.93866, 3.42388, -0.851814, -0.89634, 3.42388, -0.851814, 2.04232, 3.35927, -0.863628, 2.04232, 3.35927, 4.45427, 2.00405, 3.35927, 4.45427, 2.00405, 3.35927, -0.863628, 1.93866, 3.49564, -0.851814, 1.93866, 3.42388, -0.851814, 1.83955, -1, 0.878719, 0.681259, -1.24451, 2.84113, -0.406617, -1.24451, 3.97235, -0.406617, -1.15085,
	3.97235, 0.850611, -0.925282, 0.325509, 0.850611, -0.925282, 0.453728, 0.850611, -0.925282, 0.467536, -0.801843, -0.942143, 0.878719, -0.801843, -0.884338, 0.878719, 0.850611, -0.884338, 0.755054, 0.850611, -0.884338, -0.227558, 0.850611, -0.925282, -0.227558, 0.349695, -1.24451, 4.01151, 0.681259, -1.24451, 3.97235, 0.681259, -1.14671, 3.97235, 1.43757, -1.24451, 3.97235, 1.43757, -1.14671, 3.97235, 0.521158, -1.24451, 1.99069, -1, -0.90201, 1.33934, -1, -0.90201, 1.92164, -0.323562,
	-1, -0.955474, -1, -1, -1.08373, -1, 3.49564, -1.08373, 0.521158, -1.42347, 6.13684, 0.521158, -1.71743, 6.13684, 0.521158, -1.42347, 6.13684, 0.521158, 3.89752, 6.13684, 2.04232, -0.863628, 1.02495, 1.43757, -1.14671, 2.84113, 0.349695, -1.24451, 2.84113, -0.406617, -1.15085, 2.84113, -0.406617, -1.24451, 2.84113, 0.349695, -1.15085, 2.84113

  ]);
    
    this.index = new  Uint16Array([
		1,  0,  21,  42,  43,  36,  42,  36,  35,  324,  6,  8,  59,  60,  61, 
		59,  61,  40,  67,  63,  4,  67,  4,  3,  68,  69,  70,  68,  70,  71,
		74,  75,  76,  15,  27,  81,  30,  41,  83,  325,  49,  326,  84,  85,  32,
		84,  32,  23,  86,  88,  89,  327,  94,  95,  327,  95,  96,  98,  99,  100,
		112,  110,  99,  111,  113,  114,  111,  114,  328,  44,  116,  329,  44,  329,  330,
		87,  22,  88,  10,  9,  89,  11,  331,  117,  11,  117,  118,  119,  121,  122,
		123,  125,  126,  127,  19,  128,  332,  333,  129,  332,  129,  334,  130,  62,  82,
		130,  82,  51,  131,  25,  132,  133,  134,  135,  133,  135,  136,  335,  336,  337,
		137,  138,  338,  137,  338,  339,  139,  140,  340,  139,  340,  341,  141,  142,  143,
		150,  152,  153,  154,  155,  156,  154,  156,  157,  161,  162,  163,  148,  166,  167,
		342,  343,  146,  342,  146,  145,  169,  344,  345,  346,  347,  24,  178,  163,  162,
		191,  192,  193,  176,  141,  144,  142,  153,  143,  155,  164,  173,  101,  348,  349,
		350,  351,  92,  350,  92,  91,  215,  216,  217,  352,  353,  354,  218,  355,  356,
		218,  356,  357,  221,  222,  223,  221,  223,  224,  225,  226,  227,  231,  232,  211,
		231,  211,  214,  93,  220,  233,  228,  227,  223,  228,  223,  222,  219,  213,  212,
		225,  235,  226,  241,  242,  358,  242,  359,  358,  52,  244,  46,  243,  53,  360,
		238,  37,  39,  361,  362,  245,  361,  245,  54,  363,  364,  38,  365,  124,  366,
		367,  106,  124,  368,  369,  370,  239,  258,  255,  257,  371,  77,  372,  373,  260,
		374,  259,  375,  376,  377,  378,  379,  256,  380,  253,  381,  382,  253,  382,  34,
		262,  58,  261,  262,  261,  383,  384,  385,  18,  384,  18,  17,  263,  386,  387,
		263,  387,  388,  389,  390,  264,  389,  264,  188,  103,  349,  265,  47,  116,  44,
		107,  98,  102,  391,  392,  55,  267,  268,  269,  267,  269,  270,  275,  270,  276,
		274,  276,  271,  393,  278,  277,  394,  395,  272,  396,  397,  273,  396,  273,  398,
		279,  280,  399,  279,  399,  400,  279,  281,  282,  401,  402,  403,  401,  403,  404,
		405,  406,  407,  405,  407,  408,  409,  410,  411,  409,  411,  412,  103,  283,  104,
		413,  414,  285,  413,  285,  286,  415,  47,  416,  415,  416,  417,  414,  284,  285,
		287,  418,  419,  420,  288,  421,  422,  423,  287,  60,  130,  51,  80,  71,  73,
		72,  424,  425,  289,  246,  26,  426,  290,  31,  427,  327,  96,  427,  96,  428,
		250,  289,  29,  250,  29,  14,  290,  241,  28,  290,  28,  31,  291,  429,  430,
		429,  291,  292,  292,  291,  293,  429,  294,  295,  431,  79,  432,  433,  434,  435,
		435,  434,  436,  297,  298,  299,  437,  300,  301,  303,  438,  304,  303,  304,  305,
		182,  197,  439,  182,  439,  440,  182,  440,  441,  182,  441,  442,  182,  181,  194,
		182,  443,  172,  182,  172,  177,  444,  445,  446,  447,  174,  184,  184,  174,  209,
		184,  196,  195,  184,  195,  190,  184,  190,  189,  184,  189,  160,  184,  160,  66,
		184,  66,  65,  179,  148,  168,  148,  179,  149,  159,  179,  187,  186,  179,  198,
		198,  179,  199,  183,  179,  448,  204,  449,  205,  97,  450,  451,  450,  97,  236,
		236,  97,  452,  97,  309,  453,  454,  97,  451,  313,  455,  307,  455,  313,  456,
		456,  313,  314,  456,  314,  457,  312,  458,  459,  458,  312,  315,  315,  312,  316,
		458,  317,  318,  317,  458,  315,  230,  234,  229,  234,  230,  460,  460,  230,  461,
		462,  461,  236,  463,  464,  465,  464,  463,  33,  466,  467,  468,  467,  466,  469,
		470,  471,  472,  473,  470,  474,  475,  476,  477,  477,  476,  45,  478,  479,  480,
		105,  109,  108,  109,  105,  481,  482,  483,  484,  483,  482,  481,  485,  486,  288,
		422,  131,  132,  422,  132,  423,  254,  252,  251,  487,  254,  488,  489,  490,  491,
		492,  489,  493,  494,  470,  472,  470,  494,  78,  78,  494,  495,  496,  62,  130,
		496,  60,  21,  21,  60,  59,  21,  59,  1,  497,  498,  499,  320,  497,  321,
		500,  501,  2,  502,  503,  5,  504,  7,  505,  506,  507,  508,  13,  509,  510,
		16,  511,  512,  513,  514,  20,  21,  515,  496,  431,  432,  510,  516,  500,  2,
		0,  515,  21,  517,  431,  510,  495,  494,  2,  496,  518,  20,  509,  517,  510,
		494,  516,  2,  518,  513,  20,  487,  488,  519,  520,  487,  519,  521,  266,  466,
		522,  521,  466,  523,  524,  525,  523,  525,  526,  477,  45,  414,  477,  414,  413,
		324,  8,  527,  48,  528,  50,  48,  50,  424,  392,  529,  530,  392,  530,  55,
		56,  514,  531,  56,  531,  532,  57,  533,  534,  57,  534,  535,  536,  537,  538,
		536,  538,  539,  62,  56,  540,  62,  540,  64,  1,  59,  541,  1,  541,  542,
		543,  544,  545,  543,  545,  546,  74,  76,  547,  548,  549,  550,  548,  550,  551,
		552,  553,  554,  552,  554,  555,  556,  557,  558,  556,  558,  559,  560,  561,  562,
		560,  562,  563,  15,  81,  564,  565,  566,  567,  565,  567,  568,  30,  569,  41,
		325,  570,  49,  86,  87,  88,  90,  571,  572,  90,  572,  573,  574,  575,  576,
		574,  576,  577,  98,  100,  578,  102,  579,  580,  102,  580,  581,  582,  583,  584,
		582,  584,  585,  586,  111,  328,  586,  328,  587,  112,  99,  98,  115,  588,  583,
		115,  583,  582,  85,  86,  89,  85,  89,  32,  87,  589,  22,  10,  89,  88,
		119,  120,  121,  123,  590,  125,  127,  12,  19,  591,  592,  593,  591,  593,  594,
		131,  595,  25,  335,  337,  596,  141,  143,  144,  597,  598,  599,  597,  599,  600,
		150,  151,  152,  161,  163,  344,  148,  167,  168,  169,  161,  344,  164,  165,  601,
		164,  601,  173,  165,  175,  602,  165,  602,  601,  603,  604,  605,  603,  605,  606,
		607,  608,  609,  607,  609,  610,  346,  611,  347,  612,  613,  614,  612,  614,  615,
		178,  169,  345,  178,  345,  616,  617,  618,  619,  617,  619,  620,  178,  616,  163,
		177,  448,  179,  177,  179,  182,  191,  193,  621,  176,  144,  622,  142,  150,  153,
		202,  176,  622,  202,  622,  623,  155,  173,  156,  192,  154,  157,  192,  157,  193,
		210,  191,  621,  210,  621,  624,  101,  625,  348,  211,  212,  213,  211,  213,  214,
		215,  352,  216,  352,  354,  216,  626,  627,  628,  626,  628,  629,  630,  631,  632,
		630,  632,  633,  634,  635,  636,  634,  636,  637,  93,  219,  212,  93,  212,  220,
		225,  227,  228,  638,  221,  224,  638,  224,  639,  640,  233,  211,  640,  211,  232,
		93,  233,  640,  219,  641,  213,  235,  639,  224,  235,  224,  226,  225,  642,  235,
		237,  426,  643,  237,  643,  240,  241,  358,  28,  242,  243,  359,  52,  46,  644,
		243,  360,  359,  238,  645,  37,  363,  38,  646,  365,  367,  124,  246,  365,  366,
		246,  366,  26,  247,  248,  647,  247,  647,  648,  249,  250,  14,  249,  14,  649,
		248,  249,  649,  248,  649,  647,  650,  651,  652,  650,  652,  653,  654,  655,  656,
		654,  656,  657,  658,  659,  660,  658,  660,  661,  367,  662,  106,  368,  370,  663,
		664,  665,  666,  664,  666,  667,  239,  668,  258,  257,  77,  669,  372,  260,  670,
		374,  671,  259,  376,  672,  377,  379,  673,  256,  58,  674,  675,  58,  675,  261,
		676,  677,  678,  676,  678,  679,  262,  383,  678,  262,  678,  677,  680,  57,  535,
		680,  535,  681,  103,  101,  349,  47,  415,  116,  107,  112,  98,  102,  98,  578,
		102,  578,  579,  53,  52,  644,  53,  644,  360,  391,  55,  682,  683,  654,  657,
		683,  657,  684,  662,  247,  648,  662,  648,  106,  685,  686,  687,  685,  687,  688,
		689,  690,  691,  689,  691,  692,  275,  267,  270,  274,  275,  276,  395,  693,  694,
		395,  694,  272,  393,  695,  278,  394,  696,  395,  279,  282,  280,  103,  265,  283,
		697,  582,  585,  697,  585,  698,  107,  102,  581,  107,  581,  699,  414,  700,  284,
		287,  423,  418,  420,  485,  288,  422,  287,  701,  60,  51,  702,  703,  543,  546,
		703,  546,  704,  80,  68,  71,  72,  48,  424,  16,  512,  705,  16,  705,  706,
		674,  676,  679,  674,  679,  675,  707,  708,  709,  707,  709,  710,  46,  244,  237,
		46,  237,  240,  289,  26,  29,  426,  31,  643,  385,  711,  712,  385,  712,  18,
		589,  84,  23,  589,  23,  22,  294,  429,  292,  295,  294,  296,  474,  431,  473,
		431,  474,  79,  434,  433,  713,  714,  297,  437,  297,  714,  298,  300,  437,  297,
		301,  300,  302,  438,  303,  715,  715,  306,  716,  306,  715,  303,  716,  306,  308,
		166,  182,  167,  182,  166,  197,  182,  442,  181,  182,  194,  717,  182,  717,  718,
		182,  718,  719,  182,  719,  443,  445,  444,  720,  720,  444,  721,  174,  447,  722,
		184,  209,  196,  149,  179,  158,  158,  179,  159,  187,  179,  180,  180,  179,  170,
		170,  179,  171,  171,  179,  185,  185,  179,  186,  199,  179,  183,  449,  723,  724,
		723,  449,  200,  200,  449,  201,  201,  449,  208,  208,  449,  203,  203,  449,  204,
		205,  449,  206,  206,  449,  207,  207,  449,  147,  452,  97,  725,  725,  97,  90,
		90,  97,  571,  309,  97,  454,  310,  726,  727,  726,  310,  728,  728,  310,  311,
		728,  311,  729,  318,  317,  319,  309,  730,  453,  730,  309,  572,  572,  309,  573,
		573,  309,  454,  460,  461,  462,  462,  236,  452,  33,  463,  731,  33,  731,  732,
		469,  466,  266,  471,  470,  733,  733,  470,  473,  667,  734,  735,  734,  667,  372,
		372,  667,  373,  373,  667,  666,  264,  386,  263,  386,  264,  128,  128,  264,  127,
		127,  264,  390,  736,  475,  737,  475,  736,  476,  738,  480,  479,  479,  478,  588,
		479,  588,  115,  109,  481,  739,  481,  482,  739,  486,  485,  422,  422,  485,  131,
		252,  254,  487,  490,  489,  740,  740,  489,  492,  514,  496,  20,  496,  514,  56,
		496,  56,  62,  60,  496,  130,  498,  497,  320,  321,  497,  741,  742,  743,  744,
		743,  742,  322,  322,  742,  323,  323,  742,  745
	]);

	this.colors_index = new Float32Array([
		0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,2,2,0,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
		,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,0,2,2,2,2
		,2,2,2,2,2,2,0,0,0,0,0,0,3,0,3,3,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,3,4,3,3
		,3,3,0,0,0,0,2,1,1,3,3,4,3,3,3,3,1,4,3,3,3,3,3,3,2,2,2,2,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0
		,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3
		,3,4,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3
		,3,3,3,3,3,3,2,2,2,2,2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,2,2,2,2,2,2
		,2,2,2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0
		,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,3,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3
		,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,1,1,1,1,3,3,3,3,2,2,2,2,0,0
		,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,3,3,2,2,2,2
		,0,0,0,0,0,0]);

    this.n_faces_direct = 548;
    __proto__: RenderShape
}
