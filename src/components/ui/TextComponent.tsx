import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";

const TextComponent = () => {

    return (
        <div className="flex items-center justify-center">
            <BlurText 
              text="Nicholas Brandon Chang"
              delay={200}
              animateBy="words"
              direction="top"
              className="font-bold text-2xl md:text-5xl mb-2 dark:text-white"
            />
        </div>
    )
}

export default TextComponent