<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AdmVoivodship
 *
 * @ORM\Table(name="adm_voivodship")
 * @ORM\Entity
 */
class AdmVoivodship
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=20, nullable=true)
     */
    private $name;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="adm_voivodship_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;


}

