export const HandleContentstyle = (contentStyle: string): string => {
    return contentStyle.includes('border')
      ? `before:mt-2 ${contentStyle}`
      : contentStyle.startsWith('list-style')
      ? `before:mt-[0.65rem] ${contentStyle}`
      : contentStyle.startsWith('custom')
      ? contentStyle
      : '';
  };