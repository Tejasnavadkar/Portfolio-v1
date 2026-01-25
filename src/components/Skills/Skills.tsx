import type { SkillType } from '../../Data'

interface skills {
    skills:SkillType[]
}

const Skills = ({skills}:skills) => {
  return (
    <div>
        <section id="skills" className="mt-10 px-6">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <h3 className="text-white text-2xl font-bold">My Skills</h3>
              <div className="w-[25%] border border-gray-500 "></div>
            </div>
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
