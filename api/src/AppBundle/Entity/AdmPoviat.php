<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * AdmPoviat
 * @ApiResource(attributes={"filters"={"poviat.search_filter"}})
 * @ORM\Table(name="adm_poviat", indexes={@ORM\Index(name="IDX_70CFF6D5172C45F7", columns={"voivodship_id"})})
 * @ORM\Entity
 */
class AdmPoviat
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=25, nullable=true)
     */
    private $name;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="adm_poviat_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\AdmVoivodship
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\AdmVoivodship")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="voivodship_id", referencedColumnName="id")
     * })
     */
    private $voivodship;

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return AdmVoivodship
     */
    public function getVoivodship()
    {
        return $this->voivodship;
    }

    /**
     * @param AdmVoivodship $voivodship
     */
    public function setVoivodship($voivodship)
    {
        $this->voivodship = $voivodship;
    }


}

