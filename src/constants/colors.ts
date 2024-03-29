const colors = {
	Black: '#17181A',
	White: '#FFFFFF',
	Primary: '#FF617A',
	Secondary_B: '#75D6FF',
	Secondary_G: '#C1F78D',
	Kakao: '#FBE44D',
	Gray90: '#272A31',
	Gray80: '#414651',
	Gray70: '#5C6271',
	Gray60: '#7C8393',
	Gray50: '#979FB3',
	Gray20: '#BBC2D2',
	Gray10: '#D8DEED',
	Error: '#FF8989',
	Background: '#F3F3F3',
	Section: '#D7D7D7',
	Title_Background: '#B6B6B6',
} as const;

export type Color = (typeof colors)[keyof typeof colors];
export type ColorKey = keyof typeof colors;

export default colors;
