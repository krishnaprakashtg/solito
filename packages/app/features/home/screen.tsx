import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { SolitoImage } from 'solito/image'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      {/* <img className='hidden sm:block' src="http://localhost:3002/wow.png" alt="Wow" /> */}
      <SolitoImage
  src="/image.png"
  alt='test'
  height={100}
  width={170}
/>

    </View>
  )
}
