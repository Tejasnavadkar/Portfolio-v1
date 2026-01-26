import type { SkillType } from '../../Data'
import TitleHead from '../Common/TitleHead'

interface skills {
    skills:SkillType[]
}

const Skills = ({skills}:skills) => {
  return (
    <div>
        <section id="skills" className="mt-10 px-6">
          <div className="space-y-10">
            <TitleHead title='My Skills' />
            <div className="space-y-12">
              {skills.map((group, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-6">
                    {group.category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {group.items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                      >
                        <skill.icon size={26} />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
    </div>
  )
}

export default Skills
